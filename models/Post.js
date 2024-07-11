const db = require('./db.js')


//const Post = db.sequelize.define('jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez',{
const Post = db.sequelize.define('movimento', {
    descricao: {
        type: db.Sequelize.STRING

    },
    valor: {
        type: db.Sequelize.FLOAT

    },
    tipo: {
        type: db.Sequelize.STRING
    },
    mes: {
        type: db.Sequelize.STRING

    }





})


//Post.sync({force: true})
module.exports = Post