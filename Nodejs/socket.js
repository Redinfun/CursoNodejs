const wbs = require ('websocket').server
const http = require('http')

var socket = new wbs({
    httpServer:http.createServer().listen(3000)
})

socket.on('request',function(req){
    var conn = req.accept(null,req.origin)
    console.log("Origin -> ",req.origin)

    conn.on('message', function (message) {
        conn.sendUTF("Hello from serverSide")
    })
    
    conn.on('close',function(connection){
        console.log("Connection closed")
    })


})