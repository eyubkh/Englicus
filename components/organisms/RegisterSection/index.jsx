import { RegisterState } from '@redux/register/registerContext'
import { useContext } from 'react'
import { RegisterTypeAssist } from './RegisterTypeAssist'
import { RegisterTypeExperience } from './RegisterTypeExperience'

export const RegisterSection = () => {
  const { registerProccess, registerProccessIndex } = useContext(RegisterState)
  const { type } = registerProccess[registerProccessIndex]

  if (type === 'assist') return <RegisterTypeAssist />
  if (type === 'experience') return <RegisterTypeExperience />
}
