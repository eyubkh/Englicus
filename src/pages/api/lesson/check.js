import User from 'models/user'

export default async function handler (request, response) {
  const { _id, isCorrect, difficulty, name } = request.body

  const user = await User.findById(_id)

  if (user) {
    const fluency = {
      ...user.fluency,
      [name]: user.fluency[name] + ((isCorrect ? difficulty : -difficulty) / 6)
    }
    await User.findByIdAndUpdate(_id, { fluency })
    response.status(200).json({
      success: 'user updated'
    })
  }

  response.status(300).json({
    error: 'user not found'
  })
}
