const AWS = require('aws-sdk');
const fs = require('fs');


const AWSCredentials = {
    accessKey: process.env.AWS_ACCESS_KEY,
    secret: process.env.AWS_SECRET_KEY,
    bucketName: process.env.S3_BUCKET_NAME
};

const s3 = new AWS.S3({
    accessKeyId: AWSCredentials.accessKey,
    secretAccessKey: AWSCredentials.secret
});

exports.uploadToS3 = async (fileName) => {
    return new Promise((resolve,reject)=>{
        const fileContent = fs.readFileSync('./temp/'+fileName);

    console.log(AWSCredentials.accessKey , AWSCredentials.secret , AWSCredentials.bucketName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: AWSCredentials.bucketName,
        Key: fileName,
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            reject (err);
        }
        console.log(`File uploaded successfully. ${data.Location}`);
        resolve(`File uploaded successfully. ${data.Location}`);
    });


    })
    // Read content from the file
    
};
