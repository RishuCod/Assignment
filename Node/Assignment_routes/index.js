// Express server with route mounting
const express = require("express");
const midrouter = require('./testingRoute');

const app = express();

// Mount routes for different user types
app.use("/student", midrouter);
app.use("/professor", midrouter);
app.use("/employee", midrouter);

// Start server on port 8000
app.listen(8000, (err) => {
    if (err) {
        console.error(`Error occurred while starting the server: ${err}`);
    } else {
        console.log("Server is running on port 8000");
    }
});
