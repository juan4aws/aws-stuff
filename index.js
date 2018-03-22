/**
* install nodejs on instance: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
* us pm2 to run: http://pm2.keymetrics.io/ 
* example > pm2 start index.js
* to see log output > pm2 logs
*/

const http = require('http')
const port = 8080

const requestHandler = (request, response) => {
  console.log('request url:' + request.url);
  console.log('request ip: ' + request.connection.remoteAddress);
  response.end('\nhello from AWS instance -> ec2-user@ip-XX-YY-ZZ-AA\n')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
