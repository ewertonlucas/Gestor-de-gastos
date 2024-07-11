const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}