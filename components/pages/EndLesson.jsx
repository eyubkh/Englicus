import { Ad } from '@components/atoms/Ad'
import Link from 'next/link'
import { CrossIcon } from 'stories/atoms/CrossIcon.stories'
import styled from 'styled-components'
import { EndLessonFooter } from '../organisms/EndLessonFooter'

const EndLessonComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  section {
    display: grid; 
    place-content: center;
    width: 100%;
    height: 100%;
  }
`

export const EndLesson = () => {
  return (
    <EndLessonComponent>
      <section>
        <div>
          <Link href='/grammar' passHref legacyBehavior>
            <a>
              <CrossIcon />
            </a>
          </Link>
        </div>
        <Ad />
      </section>
      <EndLessonFooter />
    </EndLessonComponent>
  )
}
