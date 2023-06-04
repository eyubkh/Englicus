import User from 'models/user'

export default async function handler (request, response) {
  const { _id, isCorrect, difficulty, target } = request.body
  
  try {
    const user = await User.findById(_id)
    
    if (user) {
      const fluency = {
        ...user.fluency,
        [target]: user.fluency[target] + ((isCorrect ? difficulty : -difficulty) / 6)
      }
      await User.findByIdAndUpdate(_id, { ...user, fluency })
      return response.status(200).json({
        success: 'user updated'
      })
    }
  } catch (error) {
    return response.status(300).json({
      error: 'user not found'
    })
  }
}
