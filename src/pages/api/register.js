import dbConnect from '@libs/dbConnect'
import User from '../../../models/user'

export default async function register (request, response) {
  try {
    await dbConnect()

    const user = new User({
      goal: '',
      path: [],
      beginner: true,
      currentLevel: 0,
      totalXp: 0,
      fluencyRating: 1,
      fluency: {
        vocabulary: 1
      }
    })
    console.log(user)
    await user.save()
    response.status(200).json(user)
  } catch (error) {
    response.status(400).send({ error })
  }
}
