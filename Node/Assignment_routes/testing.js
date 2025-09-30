// Express router for testing routes
const express = require("express")
const router_inner = express.Router()

// POST route for employee
router_inner.post("/emp", (req, res) => { res.send("Hey you are new here") })

// GET route with username parameter
router_inner.get("/stud/:username", (req, res) => {
    console.log("i am in")
    let userName = req.params.username;

    if (userName === 'danil') {
        res.send('user name is danil')
    }
    else {
        res.send('user name is not danil')
    }
})

// POST route with username parameter
router_inner.post("/prod/:username", (req, res) => {
    let username = req.params.username;
    if (username) {
        res.send(`username is ${username}`)
    }
    else {
        res.send("user name is not present")
    }
})

module.exports = router_inner



