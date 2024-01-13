import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'
import { textToSpeech } from '@utils/textToSpeech'
import { useContext } from 'react'

export const LessonTypeSelect = () => {
  const { challenges, currentChallengeIndex, userInput } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const lessonDispatch = useContext(LessonDispatch)

  const handler = (event) => {
    textToSpeech({
      value: event.target.innerText,
      lang: 'es-ES'
    })

    lessonDispatch({
      type: 'userInput',
      payload: event.target.innerText
    })
  }

  return (
    <>
      <h3> Cual de estos es {challenge.prompt}? </h3>
      {
      challenge
        .choices.map(({ text }, index) => {
          return (
            <button
              onClick={handler}
              activate={userInput === text}
              key={index}
            >{text}
            </button>
          )
        })
    }
    </>
  )
}
