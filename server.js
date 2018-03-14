
var fs=require('fs');
var data=fs.readFileSync('users.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
console.log(words);

var d=fs.readFileSync('drugs.json', 'utf8');
var drug=JSON.parse(d);
var bodyparser=require('body-parser');
console.log(drug);

var express=require('express');
var app=express();
var server=app.listen(3000 ,listening);

function listening(){
console.log("listening..");
}

app.use(express.static('website'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


///1- get/users => returns all users full_name in  users.json file 
app.get('/get/users',function(req,res){
    let arr= words.map(item => item.full_name)
    res.send(arr);

   console.log("success");
         
   });