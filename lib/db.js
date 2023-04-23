const Sequlize = require('sequelize')
const sequelize = new Sequlize('puissance4','root','',
{
    host: '127.0.0.1',
    dialect: 'mysql'
});
//connexion bdd
sequelize.authenticate()
    .then(function()
    {
        console.log('connected');
    })
    .catch(function(err)
    {
        console.log(err);
    });
module.exports = sequelize;