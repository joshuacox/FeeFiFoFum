
const loadJsonFile = require('load-json-file');

loadJsonFile('./fiorandomreadlatency_output.json').then(json => {
  // `json` contains the parsed object
  console.log(json)
});

var obj1 = require('./fiorandomreadlatency_output.json');
//console.log(obj1)



