import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  goal: String,
  path: Array,
  beginner: Boolean,
  currentLevel: Number,
  totalXp: Number,
  fluencyRating: Number,
  fluency: {
    vocabulary: Number
  }
})

export default mongoose.models.Users || mongoose.model('Users', userSchema)
