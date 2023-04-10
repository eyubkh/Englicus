import { MainHeader } from '@components/organisms/MainHeader'
import Link from 'next/link'
import styled from 'styled-components'

const PathComponent = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  div {
    background-color: yellowgreen;
    display: grid;
    place-content: center;
    height: 90px;
  }

`

export const Path = () => {
  return (
    <PathComponent>
      <MainHeader />
      <Link href='/lessons'>
        <div>
          <h3>Unit 1</h3>
        </div>
      </Link>
    </PathComponent>
  )
}
