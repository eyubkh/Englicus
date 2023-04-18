import { LessonDispatch, LessonState } from '@redux/LessonContext'
import { textToSpeech } from '@utils/textToSpeech'
import { useContext } from 'react'

export const LessonTypeAssist = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const dispatch = useContext(LessonDispatch)

  const handlerSelect = async (event) => {
    textToSpeech({
      value: event.target.innerText,
      lang: 'es-ES'
    })

    dispatch({
      type: 'userInput',
      payload: event.target.innerText
    })
  }

  return (
    <>
      <h3>Como se dice {challenge.prompt}? </h3>
      {
        challenge
          .choices.map((choice, index) => {
            return (
              <button onClick={handlerSelect} key={index}>{choice}</button>
            )
          })
      }
    </>
  )
}
