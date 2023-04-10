import { Register } from '@components/pages/Register'
import { RegisterContextProvider } from '@redux/register/registerContext'

export default function register () {
  return (
    <RegisterContextProvider>
      <Register />
    </RegisterContextProvider>
  )
}
