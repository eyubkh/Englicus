export default function handler (req, res) {
  const challenges = [
    {
      translation: 'surgir',
      choises: [
        {
          infinitive: 'arise'
        },
        {
          past: 'arose'
        },
        {
          participle: 'arisen'
        }
      ],
      correctIndex: 1,
      target: 'past'
    },
    {
      translation: 'despertar(se)',
      choises: [
        {
          infinitive: 'awake'
        },
        {
          past: 'awoke'
        },
        {
          participle: 'awoken'
        }
      ],
      correctIndex: 1,
      target: 'past'
    },
    {
      translation: 'soportar',
      choises: [
        {
          infinitive: 'bear'
        },
        {
          past: 'bore'
        },
        {
          participle: 'borne'
        }
      ],
      correctIndex: 1,
      target: 'past'
    }
  ]

  res.status(200).json(challenges)
}
