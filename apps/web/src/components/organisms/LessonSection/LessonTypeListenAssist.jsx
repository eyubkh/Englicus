import styled from 'styled-components'
import { useContext } from 'react'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'

const LessonTypeListenAssistComponent = styled.section`
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

export const LessonTypeListenAssist = () => {
  const { challenges, currentChallengeIndex, userInput = [] } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const lessonDispatch = useContext(LessonDispatch)

  const unselectHandler = (event, choice) => {
    challenge.choices[choice.indexFrom] = choice

    userInput[choice.indexTo] = undefined
    lessonDispatch({
      type: 'userInput',
      payload: userInput.filter(value => value !== undefined)
    })
  }

  const selectHandler = (event, choice) => {
    challenge.choices[choice.indexFrom] = undefined

    const updatedSelect = [...userInput, choice]
    lessonDispatch({
      type: 'userInput',
      payload: updatedSelect
    })
  }

  return (
    <LessonTypeListenAssistComponent>
      <audio src={challenge.audio} controls />
      <article>
        <p>Selection: {userInput.map((choice, index) => {
          if (!choice) return ''
          return <button onClick={(event) => unselectHandler(event, { ...choice, indexTo: index })} key={index}>{choice.text}</button>
        })}
        </p>
        <div>
          {
          challenge.choices.map((choice, index) => {
            if (!choice) return ''
            return (
              <button onClick={(event) => selectHandler(event, { ...choice, indexFrom: index })} key={index}>{choice.text}</button>
            )
          })
        }
        </div>
      </article>
    </LessonTypeListenAssistComponent>
  )
}
