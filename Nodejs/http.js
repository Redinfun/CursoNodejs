const http = require('http');
const fs = require('fs')
const events = require('events')
const emiter = new events.EventEmitter()

function handle(req,res) {
   res.writeHead(200,{
       'Content-Type': 'text/html'
   })

   res.write('<!DOCTYPE "html">')
   res.write('<html>')
   res.write('<head><title>Http Module</title>')
   res.write('</head>')   
   res.write('<body> <h1> Hello world from http </h1> ')
   res.write('</body>')
   res.write('</html>')

   res.end();
}

var server = http.createServer(handle)

server.listen(8088, () =>{
    console.log("Acesso a porta 8088")
})

//criando arquivos
/* fs.writeFileSync('data.txt',"Hello from data.txt",(err) => {
    if(err){
        throw err
    }
}) */

//ler arquivo
/* fs.readFile('data.txt',(err,data)=>{
    if(err) throw err;
    //console.log(data.toString('utf-8'))
}) */

/* fs.readdir('.',(err,files)=>{
    if(err) throw err;

    for(var file in files ){
        console.log(files[file])
    }

}) */

/* fs.readdirSync('.')
.filter((file) => file.endsWith('.js'))
.forEach((file) => console.log(file)) */


emiter.on('FunctionSay',say)
function say() {
    console.log("Im saying something")
}

emiter.emit('FunctionSay')
