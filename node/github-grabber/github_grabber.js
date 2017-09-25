const fs = require('fs'); // file system module
const querystring = require('querystring');
const https = require('https');
const http = require('http');

var data = '';
// create HTTP server object
const githubServer = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = ''; // variable to accumulate data
    // add data and end event listener to request
    req.on('data', d => {
      body += d;
    })

    req.on('end', () => {
      console.log(body);
      let username = JSON.parse(body).username;
      console.log('username: ', username);
      res.end(username);
    })

    // })
    // if (body.length > 1e6) {
    //   req.connection.destroy();
    // }
    // res.end("I'm a POST request!");

  }
  // res.end("Uh oh, I'm not a POST request!");
})


githubServer.listen(8080, () =>
  console.log('Listening on 8080')
); // server object listens on port 8080
