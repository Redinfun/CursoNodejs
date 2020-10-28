const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//mongo
//mongoose.connect('mongodb://user:password@host:port/dbname')
mongoose.connect('mongodb://localhost:27017/MongooseDb', { useUnifiedTopology: true,useNewUrlParser: true  }  )

//require instancia de index do src
require('./src/index')(app)


//express server
app.listen(8082,()=>{
    console.log('Express server initialized on port 8082');
})