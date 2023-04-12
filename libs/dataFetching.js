async function dataFetching (url, data) {
  if (data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    return await window.fetch(url, options)
      .then(res => res.json())
  }

  return await window.fetch(url)
    .then(res => res.json())
}

export default dataFetching
