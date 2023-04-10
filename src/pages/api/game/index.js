import easyData from '@utils/irregularVerbsData/easy.json'
import moderateData from '@utils/irregularVerbsData/moderate.json'
import hardData from '@utils/irregularVerbsData/hard.json'

export default function handler (req, res) {
  const { games } = req.body
  const course = games[0]

  if (course.level === 2) {
    res.status(200).json(hardData)
  } else if (course.level === 1) {
    res.status(200).json(moderateData)
  } else if (course.level === 0) {
    res.status(200).json(easyData)
  }
}
