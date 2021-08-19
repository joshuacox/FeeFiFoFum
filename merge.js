'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('base.json');
let base = JSON.parse(rawdata);
let rawdata2 = fs.readFileSync('./fiorandomreadlatency_output.json');
base.fiorandomreadlatency = JSON.parse(rawdata2);
//console.log(base);

let data = JSON.stringify(base);
fs.writeFileSync('final.json', data);
