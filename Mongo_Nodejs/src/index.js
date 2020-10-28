module.exports = (app) => {
    //definindo rotas

    app.use('/',require('./routes/main/index'))
}