var express = require("express");
var http = require("http").Server(app);
var app = express();


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
		res.render("clients", {user : req.body})
});
