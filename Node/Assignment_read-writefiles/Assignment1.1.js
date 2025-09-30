// File operations - backup product data
const fs = require('fs')

// Write data to backup file
function writeProducts(data) {
    fs.writeFileSync('backup_Product.json', data, { "mode": 0o444, flag: 'w' });
}

// Read product data and create backup
function readProduct() {
    let data = fs.readFileSync('product.json', 'utf-8')
    writeProducts(data)
}

readProduct()