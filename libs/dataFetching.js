async function dataFetching (url) {
  return await window.fetch(url)
    .then(res => res.json())
}

export default dataFetching
