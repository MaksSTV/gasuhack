export default async function uploadS3(fotos) {
  let data = fotos.map(v => v)

  if (data.length > 0) {
    const formData = new FormData()

    data.map(d => {
      formData.append("files", d)
    })

    let response = await fetch("http://localhost:8001/uploadFile", {
      method: "POST",
      body: formData,
    })

    let url = await response.json()

    url = url.map(u => 'https://storage.yandexcloud.net/e-shop/' + u)
    console.log(url)
    return url
  }
}