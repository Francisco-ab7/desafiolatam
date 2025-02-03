const express = require('express')
const {Sequelize} = require('sequelize')





const sequelize = new Sequelize('hg_prod','sa','$supr3ma$4', {
    host:'bo.tacobell.cl',
    dialect:'mssql',
    dialectOptions: {
        options: {
          "encrypt": false
        }
      }
})

try {
     sequelize.authenticate();
    console.log("Conexion establecida !!!");
}catch (error) {
    console.log("Error de conexion !!!")
}