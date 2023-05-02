import User from 'models/user'
import smallSamples from '@utils/path/smallSamples/index'

export default async function handler (request, response) {
  const { id } = request.body
  const user = await User.findById(id)

  if (!user.path[user.currentLevel]) {
    const updatedUser = await User.findByIdAndUpdate(id, { path: smallSamples.school }, { new: true })
    response.status(200).json(updatedUser)
  }

  response.status(200).json(user)
}
