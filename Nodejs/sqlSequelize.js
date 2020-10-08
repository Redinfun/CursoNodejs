const Sequelize = require('sequelize')
const sequelize = new Sequelize(
	'nodesistemacad',
	'root',
	'namikaze',
	{
		host:"localHost",
		dialect:'mysql'
	}
)

/*
sequelize.authenticate()
.then(function(){
	console.log('Conectado com sucesso!')
})
.catch(function(e){
	console.log("Falha ao se conectar: "+e)
})

*/

//model de comunicação com banco // cria a tabela em formato json
const Postagem = sequelize.define(
		'postagens',
		{
			titulo:{
				type: Sequelize.STRING
			},
			conteudo:{
				type: Sequelize.TEXT
			}
		}
	)

//Postagem.sync({force:true})




const Caixa = sequelize.define(
		'caixas',
		{
			name:{
				type:Sequelize.STRING
			},
			initialValue:{
				type:Sequelize.STRING
			},
			clientNumber:{
				type:Sequelize.INTEGER
			}
		}
	)

/*

//insert
	Postagem.create(
		{
			titulo:"Primeiro titulo",
			conteudo:"Um conteudo qualquer."
		}
	)

	Postagem.create(
		{
			titulo:"Segundo titulo",
			conteudo:"Um conteudo qualquer."
		}
	)

	Postagem.create(
		{
			titulo:"Terceirp titulo",
			conteudo:"Um conteudo qualquer."
		}
	)

Caixa.create(
		{
			name:"Caixa Principal",
			initialValue:"R$ 9600000,00",
			clientNumber:1500
		}
	)

Caixa.create(
		{
			name:"Caixa Secundario",
			initialValue:"R$ 125000,00",
			clientNumber:200
		}
	)

Caixa.create(
		{
			name:"Caixa Fundo Imob",
			initialValue:"R$ 259000,00",
			clientNumber:700
		}
	)

Caixa.create(
		{
			name:"Caixa Investimentos",
			initialValue:"R$ 5000000,00",
			clientNumber:600
		}
	)*/
//Caixa.sync({force:true})