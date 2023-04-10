export default function list (req, res) {
  const data = {
    games: {
      'Irregular Verbs': [
        {
          name: 'Fill the gaps',
          href: '/grammar/lessons',
          src: '/fillthegaps.png',
          alt: 'fill the gaps image',
          img: {
            src: '/',
            alt: ''
          }
        }
      ],
      Sample: [
        {
          name: 'Sample',
          href: '#',
          src: '/sample.svg',
          alt: 'Sample image'
        }
      ]
    }
  }

  res.status(200).json(data)
}
