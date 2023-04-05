import styled from 'styled-components'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { TransparentButton } from '@components/atoms/buttons/TransparentButton'
import { BrandSecondary } from '@tokens'

const EndLessonFooterComponent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 20%;
  border-top: 4px solid ${BrandSecondary};
`

export const EndLessonFooter = () => {
  return (
    <EndLessonFooterComponent>
      <TransparentButton>
        try again
      </TransparentButton>
      <GreenButton>
        Continue
      </GreenButton>
    </EndLessonFooterComponent>
  )
}
