require('dotenv/config');
import express from 'express'
const PORT = 3000 || process.env.PORT
import routes from './routes'

const server = express()
server.use(routes)
server.listen(PORT ,()=>{console.log('Running on ',PORT)})