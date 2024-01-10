const handler = (event) => {
  if (event.key === 'Enter') {
    const button = window.document.getElementById('button')
    if (!button) return
    button.click()

    const html = document.getElementsByTagName('html')[0]
    html.focus()

    setTimeout(() => {
      const input = document.getElementsByTagName('input')[0]
      if (input?.hasAttribute('disabled') === false && input) input.focus()
    })
  }
}

function handlerCleanUp () {
  document.removeEventListener('keypress', handler, true)
}

function handlerEnterPress () {
  document.addEventListener('keypress', handler, true)
}

export {
  handlerCleanUp,
  handlerEnterPress
}
