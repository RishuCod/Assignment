// Nested router for testing routes
const express = require("express")
const router = express.Router()

// Mount testing routes at /yatri/profile
router.use("/yatri/profile", require("./testing"))

module.exports = router;
