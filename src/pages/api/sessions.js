import data from '@utils/path/data.json'

export default function sessions (request, response) {
  const { goal, path, currentLevel } = request.body

  const { categories } = path[currentLevel]

  console.log(categories)
  const challenges = []

  for (const challenge of data) {
    if (challenges.length >= 10) break

    const cat = challenge.categories.some((c) => categories.includes(c))
    if (cat && challenge.goals.includes(goal)) {
      challenges.push(challenge)
    }
  }

  console.log(challenges)
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
  console.log(challenges)
  response.status(200).json(object)
}
