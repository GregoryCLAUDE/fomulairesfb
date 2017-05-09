var express = require("express");
var app = express();

var nodefs = require("fs");
var bodyparser = require("body-parser");
var db = "inscription.json";

app.get("/",function (req, res){

	res.sendFile(__dirname+"/")});

app.use(express.static(__dirname+"/"))
app.listen(3000, function(){
	console.log("yipikai server ok");
})

app.post("/", function(req, res){

	
		inscription(db, req, res);

		res.sendFiles(__dirname+"/");
	

})
function inscription(req,res){
	var data = req.body;
	console.log(data);
	var inscrits= 
		{

			name : data.name,
			forname : data.forname,
			login : data.login,
			password : data.password,
			day : data.dayBirthdate,
			month : data.monthBirthdate,
			year : data.yearBirthdate
			//sexe: data.sexe

		}

	nodefs.readFile(dir, function(err, data){

		obj= JSON.parse(data);
		if (err)
		{
			res.send("error");
		}
		obj.push(addCustomer);
		json= JSON.stringify(obj);
		nodefs.writefile(dir, json, function(err){
			if (err){
				res.send ("error");
			}else{
				res.send("success");
			};
		});	
	});
	
}
