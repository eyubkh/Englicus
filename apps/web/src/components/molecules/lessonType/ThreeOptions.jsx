import styled from 'styled-components'
import { InputUnderLine } from '@components/atoms/InputUnderLine'
import { useContext } from 'react'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'

const ThreeOptionsComponent = styled.article`
  display: inline-flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`

export const ThreeOptions = () => {
  const { challenges, currentChallengeIndex, userInput } = useContext(LessonState)
  const dispatch = useContext(LessonDispatch)
  const { choises, target } = challenges[currentChallengeIndex]

  const handlerOnChange = ({ target }) => {
    dispatch({
      type: 'userInput',
      payload: target.value
    })
  }
  return (
    <ThreeOptionsComponent>
      {
          choises.map((choise, index) => {
            const choiseKey = Object.keys(choise)[0]

            return (
              <div key={index}>
                <p>{choiseKey}</p>
                {
                  target === choiseKey
                    ? <InputUnderLine onChange={handlerOnChange} value={userInput} />
                    : <h3>{choise[choiseKey]}</h3>
                }
              </div>
            )
          })
        }
    </ThreeOptionsComponent>
  )
}
