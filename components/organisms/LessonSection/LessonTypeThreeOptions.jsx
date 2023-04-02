import { LessonState } from '@redux/LessonContext'
import { useContext } from 'react'
import { InputUnderLine } from '@components/atoms/InputUnderLine'

export const LessonTypeThreeOptions = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const { translation, choises, target } = challenges[currentChallengeIndex]

  return (
    <>
      <h2>{translation}</h2>
      {
          choises.map((choise, index) => {
            const choiseKey = Object.keys(choise)[0]

            return (
              <div key={index}>
                <p>{choiseKey}</p>
                {
                  target === choiseKey
                    ? <InputUnderLine />
                    : <h3>{choise[choiseKey]}</h3>
                }
              </div>
            )
          })
        }
    </>
  )
}
