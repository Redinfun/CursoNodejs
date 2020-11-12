const Person = require('./../../schemas/Person')

module.exports = (req, res) => {
    Person
        .findByName('Junior', 'Raveline', (err, person) => {
            return res.json({ person })
        })
}