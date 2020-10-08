/*console.log("Hello World")
for (var i = 0; i <= 10;i++) {
	console.log("num " +i)
}


//recuperando uma funtion com module
var mathFunctions = require("./modulos")
console.log(mathFunctions(1000,10))
*/

//control c e rodar servidor novamente.

//criando servidor node local
var http = require('http');
http.createServer(function(req,res){
	res.end("Olá user");
}).listen(8081) // porta de criação do server

console.log("Servidor Criado com Sucesso!");