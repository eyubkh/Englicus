import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  goal: String,
  path: Array,
  beginner: Boolean,
  currentLevel: Number,
  totalXp: Number,
  fluency: Number
})

export default mongoose.models.Users || mongoose.model('Users', userSchema)
