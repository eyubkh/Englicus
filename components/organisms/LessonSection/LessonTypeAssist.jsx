import styled from 'styled-components'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'
import { textToSpeech } from '@utils/textToSpeech'
import { useContext } from 'react'
import { Border0, NeutralGrey100, NeutralLight100, NeutralLight200, NeutralLight300 } from '@tokens'

const LessonTypeAssistComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10%;
  height: 100%;
  overflow-y: scroll;

  article {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const SelectChoice = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  gap: 10px;
  background-color: ${({ active }) => active ? NeutralLight200 : NeutralLight100};
  height: 60px;
  cursor: pointer;
  border-radius: ${Border0};


  span {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: ${NeutralLight300};
    box-shadow: 1px 1px 0 0 ${NeutralGrey100};
  }
`

export const LessonTypeAssist = () => {
  const { challenges, currentChallengeIndex, userInput } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const lessonDispatch = useContext(LessonDispatch)

  const handlerSelect = (event) => {
    const targetText = event.currentTarget.children[1].innerText
    textToSpeech({
      value: targetText,
      lang: 'es-ES'
    })
    console.log()
    lessonDispatch({
      type: 'userInput',
      payload: targetText
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
                <SelectChoice active={userInput === choice} onClick={handlerSelect} key={index}>
                  <span>{index + 1}</span>
                  <p>{choice}</p>
                </SelectChoice>
              )
            })
        }
      </article>
    </LessonTypeAssistComponent>
  )
}
