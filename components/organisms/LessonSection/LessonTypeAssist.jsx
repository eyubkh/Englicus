import styled from 'styled-components'
import { LessonDispatch, LessonState } from '@redux/LessonContext'
import { textToSpeech } from '@utils/textToSpeech'
import { useContext } from 'react'

const LessonTypeAssistComponent = styled.section`
  display: flex;
  flex-direction: column;

  padding: 30px;
  background-color: aliceblue;
  height: 100%;

  article {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      display: flex;
      align-items: center;
      padding-left: 30px;
      gap: 10px;
      background-color: antiquewhite;
      height: 50px;

      span {
        padding: 7px;
        border-radius: 5px;
        border: 1px solid black;
      }
    }
  }
`

export const LessonTypeAssist = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const lessonDispatch = useContext(LessonDispatch)

  const handlerSelect = (event) => {
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
    <LessonTypeAssistComponent>
      <h3>Como se dice {challenge.prompt}? </h3>
      <article>
        {
          challenge
            .choices.map((choice, index) => {
              return (
                <div onClick={handlerSelect} key={index}><span>{index}</span>{choice}</div>
              )
            })
        }
      </article>
    </LessonTypeAssistComponent>
  )
}
