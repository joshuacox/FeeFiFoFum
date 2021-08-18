
const loadJsonFile = require('load-json-file');

loadJsonFile('./base.json').then(json => {
  // `json` contains the parsed object
  var uber = json;
  //console.log(json.hostname)
  var fs = require('fs');
  fs.readFile('fiorandomreadlatency_output.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
    // json.fiorandomreadlatency = JSON.parse(data);
    //json.fiorandomreadlatency = obj;
    uber.fiorandomreadlatency = obj;
    //console.log(uber)
    console.log(obj)
  });

});



