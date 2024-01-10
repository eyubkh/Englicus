import User from 'models/user'

export default async function handler (request, response) {
  const body = request.body
  const { id, goal, beginner } = body

  if (body.hasOwnProperty('goal')) {
    const updatedUser = await User.findByIdAndUpdate(id, { goal }, { new: true })
    response.status(200).json(updatedUser)
  }

  if (body.hasOwnProperty('beginner')) {
    const updatedUser = await User.findByIdAndUpdate(id, { beginner }, { new: true })
    response.status(200).json(updatedUser)
  }
}
