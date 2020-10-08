const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const Post = require('./models/Post')


//CONFIG
	//Template Engine
	app.engine('handlebars',handlebars({defaultLayout:'main'}))
	app.set('view engine', 'handlebars')

	//body parser
	app.use(bodyParser.urlencoded({extended: false}))
	app.use(bodyParser.json())


	//rotas 

	app.get('/',function (req,res) {
		Post.findAll({order: [['id','DESC']]}).then(function(posts){
			console.log(posts)
			res.render('home',
			{
				posts:posts
			})
		})
		
	})

	app.get('/cad',function(req,res){
		res.render('formulario')
	})	

	app.get('/delete/:id',function (req,res) {
		Post.destroy({where:{'id':req.params.id}}).then(function(){
			res.send("Postagem deletada com sucesso!")
		}).catch(function (error) {
			res.send("Postagem não existe.")
		})
	})

//so pode ser acessada com usuario passando metodo post
	app.post('/add',function(req,res) {

		var title22 = req.body.titulo
		var content22 = req.body.conteudo

		Post.create({
			title:title22,
			content:content22,
			date: Date.now()
		}).then(function(){
			res.redirect('/')
		}).catch(function(e){
			res.send("Erro $e")
		})

		
	})



//função de callback (sempre que algo acontece ela é chamada.)
app.listen(8086,function () {
	console.log("Servidor criado em http://localhost:8086");
});
