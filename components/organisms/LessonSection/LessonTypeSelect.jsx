import { SquareChoiceInput } from '@components/molecules/SquareChoiceInput'
import { LessonDispatch, LessonState } from '@redux/LessonContext'
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
            <SquareChoiceInput
              onClick={handler}
              activate={userInput === text}
              key={index}
            >{text}
            </SquareChoiceInput>
          )
        })
    }
    </>
  )
}
