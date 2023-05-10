import data from '@utils/path/schoolVocabulary.json'

export default function sessions (request, response) {
  const { path, currentLevel, fluency } = request.body

  const { name } = path[currentLevel]

  const challenges = []

  for (const challenge of data) {
    if (challenges.length >= 10) break

    const range = 200

    const difficultyRange = Math.abs(fluency[name] - challenge.difficulty) < range
    if (difficultyRange) {
      challenges.push(challenge)
    }
  }

  const object = {
    challenges
  }

  // const object = {
  //   challenges: [
  //     {
  //       prompt: 'tea, please',
  //       choices: [
  //         {
  //           text: 'hola'
  //         },
  //         {
  //           text: 'cafe'
  //         },
  //         {
  //           text: 'por'
  //         },
  //         {
  //           text: 'Te'
  //         },
  //         {
  //           text: 'azucar'
  //         },
  //         {
  //           text: 'un'
  //         },
  //         {
  //           text: 'favor'
  //         }
  //       ],
  //       correctIndex: [3, 2, 6],
  //       type: 'translate' // Escribe esto en epañol
  //     }
  //   ]
  // }
  response.status(200).json(object)
}
