const express = require('express');
const app = express();

const path = require('path');
const PORT = 3000;

// use express' built-in middleware function
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  // res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})
