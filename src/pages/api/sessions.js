import data from '@utils/path/data.json'

export default function sessions (request, response) {
  const { goal } = request.body

  const challenges = data
    .filter(({ goals }) => goals.includes(goal))

  // const object = {
  //   challenges
  // }
  const object = {
    challenges: [
      {
        prompt: 'café',
        choices: [
          {
            text: 'tea',
            img: '',
            svg: ''
          },
          {
            text: 'coffee',
            img: '',
            svg: ''

          },
          {
            text: 'water',
            img: '',
            svg: ''
          }
        ],
        correctIndex: 1,
        type: 'select' // Cual de estos es [prompt]? elegir entre las opciones
      }
    ]
  }
  console.log(challenges)
  response.status(200).json(object)
}
