// Create express server and the application
let express = require('express');
let app = express();
let productsRepo = require('./repos/productsRepo');
let cors = require('cors');

// Use express server router object
let router = express.Router();

// Configure expres middleware
app.use(express.json());
// Configure CORS
app.use(cors());

// Create get to return list of all products
router.get('/products', function (req, res, next) {
    productsRepo.get(function (data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "All products retrieved",
                "data": data
            });
        } else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The product list could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The product list could not be found."
                }
            });
        }
    }, function (err) {
        next(err);
    });
});

// Create GET /products/id to return a single product
router.get('/products/:id', function (req, res, next) {
    productsRepo.getById(req.params.id, function (data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Product retrieved",
                "data": data
            });
        } else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The product '" + req.param.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The product '" + req.param.id + "' could not be found."
                }
            });
        }
    }, function (err) {
        next(err);
    });
});

// Search to get lits of products
router.get('/search', function (req, res, next) {
    let searchObj = {
        "text": req.query.text
    };
    productsRepo.search(searchObj, function (data) {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All products retrieved",
            "data": data
        });
    }, function (err) {
        next(err);
    });
});

// Configure router to be prefixed with api
app.use('/api/', router);

// Create the server and listen on poort 5000
var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000');
});
