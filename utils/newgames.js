export default [
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
  },
  {
    prompt: 'té',
    choices: [
      {
        text: 'milk',
        img: '',
        svg: ''
      },
      {
        text: 'coffee',
        img: '',
        svg: ''

      },
      {
        text: 'coffee',
        img: '',
        svg: ''
      }

    ],
    correctIndex: 1,
    type: 'select' // Cual de estos es [prompt]? elegir entre las opciones
  },
  {
    prompt: 'café',
    choices: ['please', 'tea', 'coffee'],
    correctIndex: 1,
    type: 'assist' // Como se dice [prompt]? elegir entre las opciones
  },
  {
    promt: 'hola',
    choices: ['hello', 'coffee', 'tea'],
    correctIndex: 0,
    type: 'assist' // Como se dice [prompt]? elegir entre las opciones
  },
  {
    promt: 'por favor',
    choices: ['coffee', 'please', 'tea'],
    correctIndex: 1,
    type: 'assist' // Como se dice [prompt]? elegir entre las opciones
  },
  {
    audio: 'https://d1vq87e9lcf771.cloudfront.net/harrison/dbad0b2dafc0b80b9d8b64e99d252997',
    choices: ['help', 'pan', 'hat', 'pad'],
    correctIndex: 2,
    type: 'selectTranscription' // Que escuchas?
  },
  {
    audio: 'https://d1vq87e9lcf771.cloudfront.net/harrison/057708eb0d19076528a0e3e22fcc969f',
    choices: ['neat', 'not', 'con', 'clean'],
    correctIndex: 0,
    type: 'selectTranscription' // Que escuchas?
  },
  {
    prompt: 'hello',
    choices: [
      {
        text: 'hola'
      },
      {
        text: 'te'
      },
      {
        text: 'por'
      },
      {
        text: 'Un'
      },
      {
        text: 'por favor'
      }
    ],
    correctIndex: [0],
    type: 'translate' // Escribe esto en epañol
  },
  {
    prompt: 'hello',
    choices: [
      {
        text: 'hola'
      },
      {
        text: 'te'
      },
      {
        text: 'por'
      },
      {
        text: 'Un'
      },
      {
        text: 'por favor'
      }
    ],
    correctIndex: [0],
    type: 'translate' // Escribe esto en epañol
  },
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
    correctIndex: [0, 2, 7],
    type: 'translate' // Escribe esto en epañol
  },
  {
    audio: 'https://d1vq87e9lcf771.cloudfront.net/miranda/86a8dfc3067bea57238c56588724fd00',
    choices: ['hello', 'Julia', 'sugar', 'and', 'please', 'no'],
    correctIndex: [0, 1],
    type: 'listenTap'
  }
]
