const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()
const admin = require("./routes/admin")
//const mongoose = require('mongoose');

//configurações 
        //body parse
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(bodyParser.json)

        //handlebars
        app.engine('handlebars',handlebars({defaultLayout:'main'}))
        app.set('view engine','handlebars');

        //mongoose
            //em breve
//rotas

app.get('/',(req,res)=>{
    res.send("Initial")
    console.log("Entrou")
})

  
//outros
const PORT = 8086
app.listen(PORT, () => {
    console.log("Servidor "+PORT+ " online")
})

app.use('/',admin)