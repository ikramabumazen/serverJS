
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
var server=app.listen(4000 ,listening);

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

///2- get/user/:id => returns obj with id ==:id ____ users.json
app.get('/get/user/:id',function(req,res){
    
    let arr= words.filter( item => item.id == req.params.id );
    res.send(arr);
    
    console.log("success");
          
    });

    //3- get/user/:id => return all drugs for userId == id ___drug.json
app.get('/get/drugs/:id',function(req,res){

    drug.forEach(function(item) {
 
        if(item.userId == req.params.id){
            res.send(item.drugName);
            console.log(item.drugName);

          }
      });
    

});



