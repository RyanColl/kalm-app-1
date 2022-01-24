const aws = require('aws-sdk')
const S3 = require('aws-sdk/clients/s3')
const dotenv = require('dotenv')
const { creds } = require('./credentials/credentials')
const fs = require('fs')
dotenv.config()

const { region, bucketName, accessKeyId, secret } = creds;
const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey: secret
}) 

const sendFileToS3 = (file) => {
    const fileStream = fs.createReadStream(file.path)
    const params = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(params).promise()
}

const getFileStream = (key) => {
    const downloadParams = {
        Key: key,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}
// const generateUploadUrl = async (imageName = 'river') => {
//     const params = ({
//         Bucket: bucketName,
//         Key: imageName,
//         Expires: 60
//     })
//     const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
//     return uploadUrl
// }

// const grabImageUrl = async (imageName = 'river.jpeg') => {
//     const params = ({
//         Bucket: bucketName,
//         Key: imageName,
//         Expires: 60
//     })
//     const url = await s3.getSignedUrlPromise('getObject', params)
//     return url
// }

module.exports = {sendFileToS3, getFileStream}