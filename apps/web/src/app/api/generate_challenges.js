import { v4 as uuidv4 } from 'uuid'
import User from 'models/user'
import data from '@data/index'

export default async function handler (request, response) {
  const { id } = request.body
  const user = await User.findById(id)

  if (user.path[user.currentLevel] === undefined) {
    const numberChallengesLength = 1
    const fluencyKeys = Object.entries(user.fluency)
    for (const [key, value] of fluencyKeys) {
      // const sectionPriority = Math.floor(value / user.fluencyRating)
      // const numberOfChallenges = numberChallengesLength / sectionPriority
      const numberOfChallenges = numberChallengesLength

      const sections = []

      for (let i = 0; i < numberOfChallenges; i++) {
        const topic = data[key].topics[Math.round(Math.random() * (data[key].topics.length - 1))]

        sections.push({
          id: uuidv4(),
          topic,
          completed: false,
          xp: 0,
          max_xp: 100
        })
      }

      user.path.push({
        id: uuidv4(),
        target: key,
        completed: false,
        sectionLevel: 0,
        sections
      })
    }
    const updatedUser = await User.findByIdAndUpdate(id, { path: user.path }, { new: true })
    return response.status(200).json(updatedUser)
  }
  return response.status(200).json(user)
}