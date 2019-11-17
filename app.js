const express = require('express')
const app = express()
const port = 3000

app.get('/:name', (req, res) => {
    console.log(req);
    res.send(`Hello ${req.params.name}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var firebase = require("firebase-admin");

var serviceAccount = require("./marmitapp-firebase-config.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://marmitapp-8233a.firebaseio.com"
});