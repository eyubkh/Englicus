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
        prompt: 'tea, please',
        choices: [
          {
            text: 'hola'
          },
          {
            text: 'cafe'
          },
          {
            text: 'por'
          },
          {
            text: 'Te'
          },
          {
            text: 'azucar'
          },
          {
            text: 'un'
          },
          {
            text: 'favor'
          }
        ],
        correctIndex: [3, 2, 6],
        type: 'translate' // Escribe esto en epañol
      }
    ]
  }
  console.log(challenges)
  response.status(200).json(object)
}
