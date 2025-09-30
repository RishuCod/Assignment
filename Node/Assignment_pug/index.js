// Express app with Pug templating and Morgan logging
const express = require('express')
const app = express();
const { join } = require('path')

// Configure Pug as view engine
app.set('view engine', 'pug')
app.set('views', './views')

// Morgan logging setup
const morgan = require("morgan");
const { createWriteStream } = require("fs");
const logFile = join(__dirname, "blogchefNew.log");

// Morgan middleware for console and file logging
app.use(morgan(":method - :url - :date - :response-time ms"));
app.use(
    morgan(":method -:url - :date - :response-time ms", {
        stream: createWriteStream(logFile, { flags: "a" }),
    })
);

// Routes
app.get('/welcome/', (req, res) => {
    res.render('welcome')
})

app.get('/register/', (req, res) => {
    res.render('register')
})

// Start server
app.listen(8080, () => {
    console.log(' The server has started on port no 8080..')
})




