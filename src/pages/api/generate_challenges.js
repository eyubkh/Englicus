import { v4 as uuidv4 } from 'uuid'
import User from 'models/user'

export default async function handler (request, response) {
  const { id } = request.body
  const user = await User.findById(id)

  if (!user.path[user.currentLevel]) {
    const generatedPath = [...user.path]
    const numberChallengesLength = 2
    const fluencyKeys = Object.entries(user.fluency)
    for (const [key, value] of fluencyKeys) {
      const sectionPriority = Math.floor(value / user.fluencyRating)
      const numberOfChallenges = numberChallengesLength / sectionPriority

      const sections = []
      const topicList = ['places', 'family', 'animals']

      for (let i = 0; i < numberOfChallenges; i++) {
        const topic = topicList[Math.round(Math.random() * topicList.length)]
        sections.push({
          id: uuidv4(),
          topic,
          completed: false,
          xp: 0,
          max_xp: 100
        })
      }

      generatedPath.push({
        id: uuidv4(),
        target: key,
        completed: false,
        sectionLevel: 0,
        sections
      })
    }
    const updatedUser = await User.findByIdAndUpdate(id, { path: generatedPath }, { new: true })
    response.status(200).json(updatedUser)
  }
  response.status(200).json(user)
}
