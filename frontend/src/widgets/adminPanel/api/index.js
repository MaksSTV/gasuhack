import UserService from '@/shared/services/UserService'

export default async function uploadS3(data) {

  /*const formData = new FormData()

  formData.append("files", data)

  let response = await fetch("http://localhost:5000/api/uploadFile", {
    method: "POST",
    body: formData,
  })*/
  console.log(data)
  let response = await UserService.addPhoto(data)

  let url = await response.json()

  url = url.map(u => 'https://storage.yandexcloud.net/e-shop/' + u)
  console.log(url)
  return url

}