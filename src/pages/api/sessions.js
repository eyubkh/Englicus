import data from '@utils/path/data.json'

export default function sessions (request, response) {
  const { goal, path, currentLevel } = request.body

  const { categories } = path[currentLevel]

  console.log(categories)
  const challenges = data
    .filter(({ goals, categories: catego }) => {
      const cat = catego.some((c) => categories.includes(c))
      return cat && goals.includes(goal)
    })

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
