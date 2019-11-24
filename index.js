/**
 * Define main application imports
 */
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

/**
 * Main router config
 */
const routes = require('./src/routes/app')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use((req, res) => {
    res.status(404).json(
        {
            code: '404',
            type: 'Error',
            message: 'Endpoint not found.',
            developerMessage: 'The endpoint was not found.'
        }
    )
})