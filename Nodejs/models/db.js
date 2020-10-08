const Sequelize = require('sequelize');

	//conexão banco mysql 
	const sequelize = new Sequelize(
	'nodesistemacad',
	'root',
	'namikaze',
	{
		host:"localhost",
		dialect:'mysql',

	}
)

	sequelize.authenticate()
		.then(function(){
			console.log('Conectado com sucesso!')
		})
		.catch(function(e){
			console.log("Falha ao se conectar: "+e)
		})

module.exports = {
	Sequelize: Sequelize,
	sequelize:sequelize
}