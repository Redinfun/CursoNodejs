const Person = require('./../../schemas/Person')

module.exports = (req,res) => {

let data = {
    name:{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
    },
    age:req.body.age,
    city:req.body.city,
    state:req.body.state,
}

    Person.create(data).then((created)=> {
        return res.json({body:created})
    })
}