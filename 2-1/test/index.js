const express = require('express')
const PORT = 3000
const app = express()
app.use(express.json())
const routeUsers = require('./routes/users.route.js')
app.use('/', routeUsers)
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
definition: {
    openapi: '3.0.0',
    info: {
        title: 'API de productos',
        version: '1.0.0',
        description: 'Una API para manejar productos de tecnología',
      },
    },
apis: ['./routes/users.route.js'],
};
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options));

module.exports = app

app.listen(PORT,()=> {console.log('Running Server on port ',PORT, ' !!!' )})