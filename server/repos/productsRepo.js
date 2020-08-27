let fs = require('fs');

const FILE_NAME = './assets/products.json';

let productsRepo = {
    get: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    },
    getById: function (uid, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let selectedProduct = JSON.parse(data).find(p => p.uid == uid);
                resolve(selectedProduct);
            }
        });
    },
    search: function (searchQuery, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let products = JSON.parse(data);
                // Perform search matching name or type
                if (searchQuery) {
                    products = products.filter(
                        p => (p.name.toLowerCase().includes(searchQuery.text.toLowerCase()) ||
                            p.type.toLowerCase().includes(searchQuery.text.toLowerCase()))
                    );
                }
                resolve(products);
            }
        })
    }
};

module.exports = productsRepo;