// import data from '@utils/path/data.json'
import mockdata from '@utils/path/smallTestData.json'

export default function sessions (request, response) {
  // const { path, currentSection, currentLevel, goal } = request.body
  // const section = path[currentLevel][currentSection]

  // console.log(section)

  // const challenges = data
  //   .filter(({ goals }) => goals.includes(goal))

  // const object = {
  //   challenges
  // }
  response.status(200).json({ challenges: mockdata })
}
