
var fs=require('fs');
var data=fs.readFileSync('users.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
console.log(words);

var d=fs.readFileSync('drugs.json', 'utf8');
var drug=JSON.parse(d);
var bodyparser=require('body-parser');
console.log(drug);
