const express = require("express")
const router = express.Router()

//rotas 
    router.get('/',(req,res)=>{
        res.send("Página principal")
        console.log("Entrou")
    })

    router.get('/posts',(req,res) => {
        res.send("Página de posts")
        console.log("Entrou")
    })

    router.get('/category',(req,res)=>{
        res.send("Página de categoria")
        console.log("Entrou")
    })

module.exports = router