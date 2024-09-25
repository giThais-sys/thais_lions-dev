const express = require('express')
const app = express();
const eventosRoutes= require ('./routes/eventosRoutes')
const ingressosRoutes= require ('./routes/ingressosRoutes')

app.use(express.json())
app.use('/eventos', eventosRoutes)
app.use ('/ingressos', ingressosRoutes)

module.exports= app