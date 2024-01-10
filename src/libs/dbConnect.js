import mongoose from 'mongoose'

const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clusterenglicus.unotkhn.mongodb.net/test`

if (!MONGODB_URL) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

async function dbConnect () {
  return await mongoose.connect(MONGODB_URL)
    .then(mongoose => mongoose)
    .catch((error) => {
      return new Error(error)
    })
}

export default dbConnect
