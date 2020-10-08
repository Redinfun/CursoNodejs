const express = require("express");
const app = express();

app.get("/",function(req,res){
	res.send("Seja bem vindo ao app");
})

app.get("/home",function(req,res){
	res.sendFile(__dirname+"/html/index.html");
})

app.get("/sobre",function(req,res){
	res.sendFile(__dirname+"/html/sobre.html");
})

app.get("/blog",function(req,res){
	res.send("Meu blog");
})

app.get("/ola/:nome/:cargo",function(req,res){
	res.send("<h2>Olá sr "+req.params.nome+".</h2>\n<h3>Está feliz sendo "+req.params.cargo+"? Em?</h3>");
	console.log("Olá sr "+req.params.nome+".\nEstá feliz sendo "+req.params.cargo+"?");

})

//função de callback (sempre que algo acontece ela é chamada.)
app.listen(8086,function () {
	console.log("Servidor criado em http://localhost:8086");
});
