import data from '@utils/path/data.json'

export default function sessions (request, response) {
  const { goal, path, currentLevel, fluency } = request.body

  const { categories } = path[currentLevel]

  console.log(fluency)
  const challenges = []

  for (const challenge of data) {
    if (challenges.length >= 10) break

    const difficultyRange = Math.abs(fluency - challenge.difficulty) < 80
    const cat = challenge.categories.some((c) => categories.includes(c))
    if (cat && challenge.goals.includes(goal) && difficultyRange) {
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
