//criação de um plugin que adicione campo de data de criação em qualquer schema 

module.exports = function(schema,options){
        schema.add({created:Date})

        schema.pre('save', function (next) {
            this.created = new Date()
            next()
            })
}