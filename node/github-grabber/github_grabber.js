const fs = require('fs'); // file system module
const querystring = require('querystring');
const https = require('https');
const http = require('http');

var data = '';
// create HTTP server object
const githubServer = http.createServer((req, res) => {
  if (req == 'POST') {
    res.end("I'm a POST request!");
  } else {
    res.end("Not a POST request!");
  }
})

githubServer.listen(8080, () =>
  console.log('Listening on 8080')
); // server object listens on port 8080
