async function dataFetching (url, options = {}) {
  return await window.fetch(url, options)
    .then(res => res.json())
}

export default dataFetching
