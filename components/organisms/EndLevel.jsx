import { Ad } from '@components/atoms/Ad'
import Link from 'next/link'
import { CrossIcon } from 'stories/atoms/CrossIcon.stories'
import styled from 'styled-components'
import { EndLevelFooter } from './EndLevelFooter'

const EndLevelComponent = styled.div`
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

export const EndLevel = () => {
  return (
    <EndLevelComponent>
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
      <EndLevelFooter />
    </EndLevelComponent>
  )
}
