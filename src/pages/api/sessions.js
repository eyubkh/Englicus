import data from '@data/index'
import User from 'models/user'

export default async function sessions (request, response) {
  const { currentLesson, _id } = request.body

  const user = await User.findById(_id)

  if (user) {
    const challenges = []
    // const range = 200
    const currentSection = currentLesson.sections[currentLesson.sectionLevel]
    const exercises = data[currentLesson.target].exercises[currentSection.topic]

    for (const challenge of exercises) {
      if (challenges.length >= 10) break

      // const difficultyRange = Math.abs(user.fluency[currentLesson.target] - challenge.difficulty) < range
      if (challenge.categories.includes(currentSection.topic)) {
        challenges.push(challenge)
      }
    }

    if (challenges.length === 0) return response.status(300).json({ error: 'No more challenges available' })

    return response.status(200).json({ challenges })
  }

  return response.status(300).json({ error: 'user not found' })
}
