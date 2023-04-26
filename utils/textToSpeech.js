export function textToSpeech ({ value, lang = 'en-GB' }) {
  const utterThis = new window.SpeechSynthesisUtterance(value)
  utterThis.lang = lang

  window.speechSynthesis.speak(utterThis)
}
