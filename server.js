var express = require("express");
var http = require("http").Server(app);
var app = express();

//var jade = require("jade");

var nodefs = require("fs");
var bodyparser = require("body-parser");
var db = "inscription.json";

app.listen(3000, function(){
	console.log("yipikai server ok");
})

app.use(express.static(__dirname+"/"))
app.use(bodyparser.urlencoded({extend:false}));
app.use(bodyparser.json());
app.set("views", "./views");
app.set("view engine", "jade");

app.post("/clients", function(req, res){

		//res.sendFile(__dirname+"/view/clients.jade");
		res.render("clients", {user : req.body})

});

// app.get("/clients",function (req, res){


// });

// function inscription(req,res){
// 	var data = req.body;
// 	console.log(data)
// 	console.log(req)
// 	var inscrits= 
// 		{

// 			name : data.name,
// 			forname : data.forname,
// 			login : data.login,
// 			password : data.password,
// 			day : data.dayBirthdate,
// 			month : data.monthBirthdate,
// 			year : data.yearBirthdate
// 			//sexe: data.sexe

// 		}
// 		console.log(inscrits)
// 	nodefs.readFile(function(err, data){

// 		obj= JSON.parse(data);
// 		if (err)
// 		{
// 			res.send("error");
// 		}
// 		obj.push(addCustomer);
// 		json= JSON.stringify(obj);
// 		nodefs.writefile(json, function(err){
// 			if (err){
// 				res.send ("error");
// 			}else{
// 				res.send("success");
// 			};
// 		});	
// 	});
	
// }
