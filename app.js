/**
 * Define main application imports
 */
const express = require('express')
const app = express()
const port = 3000

/**
 * Main router config
 */
const routes = require('./src/routes/app')
app.use(routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))