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

    }
  ]
  res.status(200).json(challenges)
}
