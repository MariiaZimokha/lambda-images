const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server.js');

const binaryMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'text/css',
    'text/html'
  ];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)


module.exports.universal = (event, context) => 
    awsServerlessExpress.proxy(server, event, context);