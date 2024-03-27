const ApiError = require('../exceptions/api-error');
const s3Client = require("../s3-storage/s3-client");
const { PutObjectCommand } = require("@aws-sdk/client-s3");

class S3Service {
    async uploadFile(params) {
        let upload = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );
        return upload
    }
}

module.exports = new S3Service