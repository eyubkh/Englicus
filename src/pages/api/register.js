import dbConnect from '@libs/dbConnect'

import User from '../../../models/user'

export default async function register (request, response) {
  await dbConnect()

  const user = new User({
    goal: 'school',
    path: [],
    beginner: true,
    currentLevel: 0,
    totalXp: 0,
    fluency: 0
  })

  try {
    console.log(user)
    await user.save()
    response.status(200).send('user created')
  } catch (error) {
    response.status(400).send('error', { error })
  }
}
