
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

//4-POST 
app.post('/post/:name/:email/:gender', function(req,res){
    var obj = 
    require('./users.json');
    var newThing = {
        name : req.params.name,
        email: req.params.email,
        gender: req.params.gender
      };
      obj.push(newThing);

fs.writeFile('./users.json', JSON.stringify(obj), function (err) {
  console.log(err);
});
    res.send("a new object uploaded to users.json file");
   
});

//5-DELETE => delete object from users.json file with id == params.id

app.delete('/delete/:id', function(req,res){
    var D = 
    require('./users.json');
 let arr= words.filter( item => item.id == req.params.id );
   
    
    let index= words.indexOf(arr[0]);

    let del_obj= D.splice(index,1);

    fs.writeFile('./users.json', JSON.stringify(D), function (err) {
        console.log(err);
      });
          res.send("deleted an object from users.json file");
    res.send(del_obj);

});


