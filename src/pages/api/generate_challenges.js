import User from 'models/user'

export default async function handler (request, response) {
  const { id } = request.body
  const user = await User.findById(id)

  if (!user.path[user.currentLevel]) {
    const generatedPath = []
    const numberChallengesLength = 6
    const fluencyKeys = Object.entries(user.fluency)
    for (const [key, value] of fluencyKeys) {
      const sectionPriority = Math.floor(value / user.fluencyRating)
      const numberOfChallenges = numberChallengesLength / sectionPriority

      generatedPath.push({
        name: key,
        completed: false,
        xp: 0,
        max_xp: 100 * numberOfChallenges
      })
    }
    const updatedUser = await User.findByIdAndUpdate(id, { path: [...user.path, ...generatedPath] }, { new: true })
    response.status(200).json(updatedUser)
  }
  response.status(200).json(user)
}
