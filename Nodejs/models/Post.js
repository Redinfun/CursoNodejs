const db = require('./db')

const Post = db.sequelize.define(
	'posts',{
		
		title:{
			type:db.Sequelize.STRING
		},
		content:{
			type:db.Sequelize.TEXT
		},
		date:{
			type:db.Sequelize.DATE
		}	
	})

//Post.sync({force:true})

module.exports = Post