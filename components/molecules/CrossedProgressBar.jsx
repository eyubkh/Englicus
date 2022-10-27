import { CrossIcon } from '@components/atoms/CrossIcon'
import { ProgressBar } from '@components/atoms/ProgressBar'
import { Spacing0 } from '@tokens'
import Link from 'next/link'
import styled from 'styled-components'

const CrossedProgressBarComponent = styled.div`
  display: flex;
  gap: ${Spacing0};
  align-items: center;
`

export const CrossedProgressBar = ({ progress, href }) => {
  return (
    <CrossedProgressBarComponent>
      <Link href={href} passHref legacyBehavior>
        <a>
          <CrossIcon />
        </a>
      </Link>
      <ProgressBar progress={progress} />
    </CrossedProgressBarComponent>
  )
}
