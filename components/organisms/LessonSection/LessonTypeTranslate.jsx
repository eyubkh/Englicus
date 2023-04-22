import { LessonState } from '@redux/LessonContext'
import { useContext, useState } from 'react'

export const LessonTypeTranslate = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const [stack, setStack] = useState([])

  const handler = (event) => {
    setStack([...stack, event.target.innerText])
  }

  return (
    <>
      <h3>Escribe esto en Castellano: {challenge.prompt} </h3>
      <p>Select: {stack}</p>
      {
        challenge
          .choices.map((choice, index) => {
            return (
              <button onClick={handler} key={index}>{choice.text}</button>
            )
          })
      }
    </>
  )
}
