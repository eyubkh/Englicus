import dbConnect from '@libs/dbConnect'

export default async function login (request, response) {
  try {
    await dbConnect()
    return response.status(200).send('connected to db')
  } catch (error) {
    return response.status(400).send('error to connect db', error)
  }
}
