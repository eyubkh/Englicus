import User from 'models/user'

export default async function handler (request, response) {
  const { currentLevel, path, _id, xp } = request.body
  const user = await User.findById(_id)

  console.log(xp)

  if (user) {
    const currentLesson = path[currentLevel]

    const lesson = {
      ...currentLesson,
      xp: currentLesson.xp + xp
    }

    const maxLevelReached = lesson.xp >= lesson.max_xp
    lesson.completed = maxLevelReached

    path[currentLevel] = lesson

    await User.findByIdAndUpdate(_id, {
      path,
      currentLevel: maxLevelReached ? user.currentLevel + 1 : user.currentLevel
    })
  }

  response.status(200)
}
