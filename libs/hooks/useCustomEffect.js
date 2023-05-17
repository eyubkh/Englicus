import { handlerCleanUp, handlerEnterPress } from '@libs/handlerEventListener'

const { useEffect, useRef } = require('react')

export function useCustomEffect (callback, reload = []) {
  const ref = useRef(false)
  useEffect(() => {
    if (ref.current === true) return handlerCleanUp
    ref.current = true
    handlerEnterPress()

    callback()
  }, reload)
}
