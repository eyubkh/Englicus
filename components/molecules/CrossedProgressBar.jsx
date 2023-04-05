import { CrossIcon } from '@components/atoms/CrossIcon'
import { ProgressBar } from '@components/atoms/ProgressBar'
import { Spacing2 } from '@tokens'
import Link from 'next/link'
import styled from 'styled-components'

const CrossedProgressBarComponent = styled.div`
  display: flex;
  width: 100%; 
  gap: ${Spacing2};
  align-items: center;
  justify-content: center;
`

export const CrossedProgressBar = ({ progress, href, ...args }) => {
  return (
    <CrossedProgressBarComponent>
      <Link href='/grammar' passHref legacyBehavior>
        <CrossIcon />
      </Link>
      <ProgressBar progress={progress} {...args} />
    </CrossedProgressBarComponent>
  )
}
