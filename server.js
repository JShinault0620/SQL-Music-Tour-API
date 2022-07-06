// DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()

const { Sequelize } = require('sequelize')

const Band = require('./models/Band')

const bandsController = require('./controllers/bands_controller')
const eventsController = require('./controllers/events_controller')
const stages_controller = require('./controllers/stages_controller')

const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: 'wadqe1324'
})

try {
    sequelize.authenticate()
    console.log('Connected')
} catch(err) {
    console.log('Not Connected')
}

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/bands', bandsController)
app.use('/bands', stages_controller)
app.use('/bands', eventsController)

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
    console.log(Band)
})