const { S3Client } = require("@aws-sdk/client-s3");

// Создание клиента для Object Storage
const s3Client = new S3Client(
    { 
        region: process.env.S3_REGION, 
        endpoint: process.env.S3_ENDPOINT, 
        credentials: {
            accessKeyId: process.env.S3_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_KEY
        }  
});

module.exports = s3Client
