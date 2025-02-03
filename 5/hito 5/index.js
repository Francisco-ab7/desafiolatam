const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
const sequelize = require("./src/databases/configdb.js");
const route = require('./src/routes/user.route.js');

app.use(express.json());
app.use("/", route);

const testdb = async() => {
    try {
        await sequelize.authenticate();
        console.log("Databases connect ok")
    }
    catch{
        console.log("Error Databases connect")
    }
}
testdb()

app.listen(3000,console.log('server running on port 3000'),sequelize.sync({ force: false }))
//module.exports = app