const express = require('express')
const server = express()
const morgan = require('morgan')
const router = require("./routes/index")
const { conn } = require('./DB_connection')

server.use(express.json())
server.use(morgan("dev"))
server.use("/rickandmorty", router)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

conn.sync({force:true}).then(()=>{
  server.listen(3001, () => {
    
    console.log('Server raised in port: 3001');
  })

})