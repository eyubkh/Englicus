import dbConnect from '@libs/dbConnect'

export default async function login (request, response) {
  try {
    await dbConnect()
    response.status(200).send('connected to db')
  } catch (error) {
    response.status(400).send('error to connect db', error)
  }
}
