// Product data management module
const fs = require("fs");
const { encode } = require("querystring");
const file = "product.json";

// Load product data from JSON file
function load_data() {
    let costumer = fs.readFileSync(file, { encode: "utf-8" });
    return JSON.parse(costumer);
}

// Add new product to JSON file
function writeData(name, price) {
    console.log("we are starting with writeData() method....");
    var customers = load_data(); // Load existing products
    customers.push({
        name: name, // Add new product
        price: price,
    });
    let t = fs.writeFileSync(file, JSON.stringify(customers));
}

// Export functions
module.exports = {
    load: load_data,
    writeCustomer: writeData,
};
