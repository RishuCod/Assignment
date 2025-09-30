// Demo: Sync vs Async file operations
const fs = require("fs");

// Synchronous file reading
function user1() {
    console.log("user 1 stated");
    let data = fs.readFileSync("backup_product.json", "utf-8");
    console.log("==========");
    console.log(data);
    console.log("user 1 ended");
}

// Asynchronous file reading
function user2() {
    console.log("user 2 stated");
    fs.readFile("backup_product.json", "utf-8", (err, data) => {
        console.log("testing");
        if (err) {
            console.log("myError", err);
        } else {
            console.log(data);
        }
    });
    console.log("user 2 ended");
}

// Another async file reading
function user3() {
    console.log("user 3 stated");
    fs.readFile("backup_product.json", "utf-8", (err, data) => {
        if (err) {
            console.log("myError", err);
        } else {
            console.log(data);
        }
    });
    console.log("user 3 ended");
}

// Execute all functions
user1();
user2();
user3();

console.log("all user called");

// Clean up - delete backup file
fs.unlink("backup_Product.json", (err) => {
    if (err) {
        console.log("error is --->", err);
    } else {
        console.log("backup_product.json file is deleted successfully");
    }
});
