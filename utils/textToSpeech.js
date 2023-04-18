export function textToSpeech ({ value, lang = 'en-GB' }) {
  const utterThis = new SpeechSynthesisUtterance(value)
  utterThis.lang = lang

  window.speechSynthesis.speak(utterThis)
}
