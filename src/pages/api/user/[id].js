import User from 'models/user'
export default async function handler (request, response) {
  const { id } = request.query

  try {
    const user = await User.findById(id)

    if (!user) throw new Error()
    response.status(200).json(user)
  } catch (error) {
    response.status(300).json({ error: 'user not found' })
  }
}
