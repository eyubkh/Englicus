export default function writeLocalData (data = {}) {
  const name = 'state'
  const isRegisterCreated = window.localStorage.getItem(name)
  if (!isRegisterCreated) {
    window.localStorage.setItem(name, JSON.stringify({}))
  }

  const localData = window.localStorage.getItem(name)
  const registerData = JSON.parse(localData)
  const newObject = {
    ...registerData,
    ...data
  }
  window.localStorage.setItem(name, JSON.stringify(newObject))
}
