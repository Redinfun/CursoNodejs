const mongoose = require("mongoose")

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/node_db', {
        useNewUrlParser: true , 
        useUnifiedTopology: true,
       
    }).then(()=>{
        console.log("MongoDB Conectado...");
    }).catch((err)=>{
        console.log("Houve um erro: " + err);
    });