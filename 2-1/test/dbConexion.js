const {Pool} = require('pg')
const pool = new Pool({
    host:"localhost",
    user:"sa",
    password:"1234abcd",
    database:"testdb",
    allowExitOnIdle: true
})
module.exports = pool