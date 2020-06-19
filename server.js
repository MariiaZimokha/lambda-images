
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const config = require('./config');

app.use(bodyParser.urlencoded({ extended: true }));

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: 'us-east-1'
});

const s3 = new AWS.S3();

app.get('*/:img', (req, res) => {
    const {img} = req.params;

    const params = { 
        Bucket: 'images-node-resized',
        Key: img
    };

    s3.getObject(params, (err, data) => {
        if(err) {
            console.log('error : ', err);
            res.send(err);
            return;
        }
        const [imgName, ext] = img.split('.');
        res.contentType(`image/${ext}`);
        res.send(data.Body);
    });

});

// for serverless
module.exports = app;
