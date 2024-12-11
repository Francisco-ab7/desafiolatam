const express = require('express')
const PORT = 80
const app = express()
app.use(express.json())
const routeUsers = require('./routes/users.route.js')
app.use('/', routeUsers)
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const spec = {
definition: {
  openapi: '3.1.0',
    info: {
        title: 'API users Manager',
        version: '1.0.0',
        description: 'API service for management of users',
      },
    },
apis: ['./routes/users.route.js'],
};
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(spec)));

module.exports = app

app.listen(PORT,()=> {console.log('Running Server on port ',PORT, ' !!!' )})