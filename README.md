# lambda-images
lambda-express.js-s3

**Description** 

This is a lambda function with express.js, servers an image per request. The server is connected to the S3 bucket where all images are stored.



**Demo**

https://e0ikmlxpr3.execute-api.us-east-1.amazonaws.com/production/test.jpg

https://e0ikmlxpr3.execute-api.us-east-1.amazonaws.com/production/Hero.jpeg


**Plugin**

Using [`serverless-apigw-binary`](https://www.serverless.com/plugins/serverless-apigw-binary/) plugin that adds binary files support in API Gateway. 

The example of using it:
https://github.com/MariiaZimokha/lambda-images/blob/master/serverless.yml#L22-L27
