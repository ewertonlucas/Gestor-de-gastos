const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const { where } = require("sequelize")



//config
//template engine
app.engine('handlebars', engine({
    defaultLayout: 'main', // Define o layout padrão como 'main'
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//rotas

app.get('/', function (req, res) {
    Post.findAll({ order: [['id', 'DESC']] })
        .then(gastos => {            
            res.render('home', { gastos: gastos }); // Renderiza a view 'home' e passa os posts como contexto

        }).catch(function (erro) {

            res.send("HOUVE UM ERRO " + erro)
        })
})


app.post('/add', function (req, res) {
    const { descricao, valor, tipo, mes } = req.body; // Capturando dados dos inputs
    //Enviando dados para o bd
    if (!descricao || !valor || !tipo || !mes) {
        return res.status(400).send("Prencha todos os itens");
    }

    Post.create({ descricao, valor, tipo, mes })
        .then(function () {
            res.redirect('/');
        })
        .catch(function (erro) {
            res.status(500).send("HOUVE UM ERRO: " + erro);
        });

})

app.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { 'id': req.params.id } }) // deletando linha do bd pelo id 
        .then(function () {
            res.redirect('/');

        }).catch(function (erro) {
            res.sen("esta mensagem nao existe" + erro)
        })
})









app.listen(8081, function () {

    console.log("servidor rodando na porta 8081")
})







