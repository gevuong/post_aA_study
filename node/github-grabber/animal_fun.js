const fs = require('fs'); // File System module
const http = require('http');
const querystring = require('querystring');

// Part 1

//
// if (process.argv.length > 2) {
//   var animal_letter = process.argv[2].toUpperCase();
//   // and run animalGrabber() and fs.writeFile()
// } else {
//   // return all animals and do not run fs.writeFile
// }
//
// // async version. Callback provides an error obj (if it exists) and data from file. This order of callback is common in Node.
// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   let animals_filter = data.split("\n")
//   .filter(animal => animal.startsWith(animal_letter))
//   .join('\n');
//
//   // second argument provides data that should be written to file, and callback will only provide error obj (if it exists)
//   fs.writeFile(`${animal_letter}_animals.txt`, animals_filter, err => {
//     if (err) throw err;
//     console.log(`${animal_letter}_animals.txt successfully written`);
//   })
// });

// // sync version of readFile()
// // let animal_text = fs.readFileSync('./animals.txt', 'utf-8')
// // console.log(animal_text)
//
//
// // returns a buffer object if encoding type is not stated, Buffers are instances of Buffer class in Node, designed to handle raw binary data. Each buffer corresponds to raw memory allocated outside V8.
// // fs.readFile('./animals.txt', (err, data) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(data);
// //   }
// // })


// Part 2: Using HTTP req/res cycle instead
const cache = {}; // POJO to store and access previously requested content. This is to prevent having to readFile with every request.

function animalGrabber(data, letter) {
    return data.split("\n")
    .filter(animal => animal.startsWith(letter))
    .join("\n")
};

// create a HTTP server object using createServer method
const animalServer = http.createServer((req, res) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const query = req.url.split('?')[1];

  if (query !== undefined && alphabet.includes(query)) {
    var animal_letter = query.toUpperCase();
    console.log('letter: ', animal_letter);

    if (cache[animal_letter] !== undefined) {
      res.end(cache[animal_letter]);
      return
    } else {
    fs.readFile('./animals.txt', 'utf-8', (err, data) => {
      if (err) throw err;
      let filtered_animals = animalGrabber(data, animal_letter);
      console.log('filtered_animals: ', filtered_animals);
      cache[`${animal_letter}`] = filtered_animals;
      console.log('cache: ', cache);
      res.end(filtered_animals);
    })
    }

  } else {
    if (cache['animals'] !== undefined) {
      res.end(cache['animals']);
    }
    fs.readFile('./animals.txt', 'utf-8', (err, data) => {
      if (err) throw err;
      cache['animals'] = data;
      res.end(data);
    })
  }
  res.writeHead(200, {'Content-Type': 'text/html'}); // converts txt to html
  res.write(`Animals that start with letter, ${animal_letter}: `); // write response to client
}).listen(8000, () =>
    console.log('listening on 8000')
  ); // server object listens on port 8000


// console.log(process.argv[2])  // returns arguments passed from command line using global process object provided by node
