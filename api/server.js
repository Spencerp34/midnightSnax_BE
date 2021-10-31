const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const dishesRouter = require('../api/dishes/dishes-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/dishes', dishesRouter)


server.use((err, req, res) => { 
  res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
  });
});

module.exports = server
