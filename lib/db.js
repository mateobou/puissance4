// const mysql = require("mysql2");
import mysql from "mysql2";
import { Sequelize } from "sequelize";
// Open the connection to MySQL server
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS puissance4`,
);

// Close the connection
connection.end();

/*
const Sequlize = require('sequelize')
*/
const sequelize = new Sequelize('puissance4','root','root',
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
// module.exports = sequelize;
export default sequelize;