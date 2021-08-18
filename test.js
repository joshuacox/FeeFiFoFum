const loadJsonFile = require('load-json-file');

loadJsonFile('./base.json').then(json => {
    // `json` contains the parsed object
  console.log(json)
});
