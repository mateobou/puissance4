const Sequlize = require('sequelize')
const mysql = require("mysql2");

function createDatabase(){
    // Open the connection to MySQL server
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
    });
    
    // Run create database statement
    connection.query(
        `CREATE DATABASE IF NOT EXISTS puissance4`,
        function (error) {
        console.log(error);
        }
    );
    // Close the connection
    connection.end();
}
createDatabase()
const sequelize = new Sequlize('puissance4','root','root',
{
    host: 'localhost',
    dialect: 'mysql'
})


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