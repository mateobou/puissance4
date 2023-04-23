const Sequlize = require('sequelize')
const sequelize = new Sequlize('puissance4','root','',
{
    host: 'localhost',
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