import express from 'express'
import path from 'path'
import events from './routes/events'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/events', events)

export default server
