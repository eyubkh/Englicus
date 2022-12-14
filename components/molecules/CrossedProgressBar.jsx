import { CrossIcon } from '@components/atoms/CrossIcon'
import { ProgressBar } from '@components/atoms/ProgressBar'
import { Spacing0 } from '@tokens'
import { Context } from '@utils/context'
import Link from 'next/link'
import { useContext } from 'react'
import styled from 'styled-components'

const CrossedProgressBarComponent = styled.div`
  display: flex;
  width: 100%; 
  gap: ${Spacing0};
  align-items: center;
  justify-content: center;
`

export const CrossedProgressBar = ({ progress, href, ...args }) => {
  const state = useContext(Context)

  return (
    <CrossedProgressBarComponent>
      <Link href='/learn' passHref legacyBehavior>
        <a>
          <CrossIcon />
        </a>
      </Link>
      <ProgressBar progress={state.progress} {...args} />
    </CrossedProgressBarComponent>
  )
}
