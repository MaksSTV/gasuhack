// Импорт клиентов и команд AWS SDK для работы с Node.js
const uuid = require('uuid');
const s3Service = require("../service/s3-service");

// Установка параметров

class S3Controller {
    async uploadFileToStorage(req, res, next) {
        try {
            let urls = []
            req.files.forEach((file) => {
                let str = file.originalname;
                let format = str.slice(str.indexOf("."));

                const params = {
                    Bucket: "studboard-bucket",
                    Key: uuid.v4() + format,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                };
                console.log(params)
                let upload = s3Service.uploadFile(params)
                urls.push(params.Key)
                console.log(upload);
                console.log(urls)
            });

            console.log(urls)
            /*if(errorStatus !== 0){
            res.status(errorStatus).send(errorRes);
            }*/
            return res.status(200).send(urls);
        } catch (e) {
            next(e)
        }
    }
}
module.exports = new S3Controller()