import dataExercices from '@data/index'
import User from 'models/user'

export default async function sessions (request, response) {
  const { currentLesson, _id } = request.body

  const user = await User.findById(_id)

  if (user) {
    const challenges = []
    const range = 200
    const data = dataExercices[currentLesson.target]
    const currentSection = currentLesson.sections[currentLesson.sectionLevel]

    for (const challenge of data) {
      if (challenges.length >= 10) break

      const difficultyRange = Math.abs(user.fluency[currentLesson.target] - challenge.difficulty) < range
      if (difficultyRange && challenge.categories.includes(currentSection.topic)) {
        challenges.push(challenge)
      }
    }

    if (challenges.length === 0) return response.status(300).json({ error: 'No more challenges available' })
    return response.status(200).json({ challenges })
  }

  return response.status(300).json({ error: 'user not found' })
}
