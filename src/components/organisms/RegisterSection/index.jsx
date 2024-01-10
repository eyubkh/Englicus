import { RegisterState } from '@redux/register/registerContext'
import { useContext } from 'react'
import { RegisterTypeGoal } from './RegisterTypeGoal'
import { RegisterTypeExperience } from './RegisterTypeExperience'
import { RegisterTypeSignup } from './RegisterTypeSignup'

export const RegisterSection = () => {
  const { registerProccess, registerProccessIndex } = useContext(RegisterState)
  const { type } = registerProccess[registerProccessIndex]

  if (type === 'goal') return <RegisterTypeGoal />
  if (type === 'experience') return <RegisterTypeExperience />
  if (type === 'signup') return <RegisterTypeSignup />
}
