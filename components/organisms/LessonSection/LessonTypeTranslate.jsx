import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'

const LessonTypeTranslateComponent = styled.section`
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

export const LessonTypeTranslate = () => {
  const { challenges, currentChallengeIndex, userInput = [] } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const lessonDispatch = useContext(LessonDispatch)
  const [choices, setChoices] = useState([], userInput)

  useEffect(() => {
    setChoices([...challenge.choices])
  }, [userInput.length === 0])

  const unselectHandler = (event, choice) => {
    choices[choice.indexFrom] = choice

    userInput[choice.indexTo] = undefined
    lessonDispatch({
      type: 'userInput',
      payload: userInput
    })
  }

  const selectHandler = (event, choice) => {
    choices[choice.indexFrom] = undefined

    const updatedSelect = [...userInput, choice]

    lessonDispatch({
      type: 'userInput',
      payload: updatedSelect
    })
  }

  console.log(userInput)

  return (
    <LessonTypeTranslateComponent>
      <h3>Traduce el texto: {challenge.prompt} </h3>
      <article>
        <p>Selecciona: {userInput.map((choice, index) => {
          if (!choice) return ''
          return <button onClick={(event) => unselectHandler(event, { ...choice, indexTo: index })} key={index}>{choice.text}</button>
        })}
        </p>
        <div>
          {
          choices.map((choice, index) => {
            if (!choice) return ''
            return (
              <button onClick={(event) => selectHandler(event, { ...choice, indexFrom: index })} key={index}>{choice.text}</button>
            )
          })
        }
        </div>
      </article>
    </LessonTypeTranslateComponent>
  )
}
