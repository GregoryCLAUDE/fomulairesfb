"use strict";

const Hapi= require ("hapi");
const Path = require("path");
const server = new Hapi.Server();
server.connection({ port: 3001, host: "localhost"});



server.register(require("inert"), (err) => {

	if (err) {
		throw err
	}

	server.route({

		method: "GET",
		path: "/{param*}",
		handler: {
			directory : {
				path: "hapi"
			}
		} 

		}) 
	});

	server.route({
		method: "POST",
		path: "/{param*}",
		handler: {
			directory : {
				path : "views"
			}
		}
		
	})
server.start ((err) =>{

	if (err){
		throw err;
	}
	console.log("yipikai le serveur fonctionne au port : ${server.info.uri}");

})
