const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3();

const nodeprojectbucket = "nodeprojectbucket";
const filePath = "nodejsDemo/index.js";

const fileContent = fs.readFileSync(filePath);

const params = {
    Bucket: nodeprojectbucket,
    Key: indexedDB.js,
    Body: fileContent
};

s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading to S3:', err);
    } else {
      console.log('Successfully uploaded to S3:', data);
    }
  });