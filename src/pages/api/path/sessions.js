import data from './data.json'

export default function sessions (request, response) {
  response.status(200).json(data)
}
