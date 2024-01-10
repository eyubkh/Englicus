import User from 'models/user'

export default async function handler (request, response) {
  const { currentLesson, _id, xp } = request.body

  const user = await User.findById(_id)
  if (user) {
    const { sections, sectionLevel } = currentLesson
    const section = sections[sectionLevel]

    const updatedSection = {
      ...section,
      xp: section.xp + xp
    }

    const maxLevelReached = updatedSection.xp >= updatedSection.max_xp
    updatedSection.completed = maxLevelReached

    sections[sectionLevel] = updatedSection
    const lesson = currentLesson

    if (maxLevelReached) {
      lesson.sectionLevel += 1

      user.path[user.currentLevel] = lesson
      if (!lesson.sections[lesson.sectionLevel]) {
        user.currentLevel += 1
      }
    }

    const updatedUser = await User.findByIdAndUpdate(_id, {
      path: user.path,
      currentLevel: user.currentLevel
    }, { now: true })
    return response.status(200).json(updatedUser)
  }

  return response.status(200)
}
