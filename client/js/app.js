'use strict';
// Configure server url
const BASE_URL = "http://localhost:5000/";

// Load routing
function init() {
    var router = new Router([
        new Route('home', 'home.html', true),
        new Route('shop', 'shop.html'),
        new Route('magazine', 'magazine.html'),
        new Route('product', 'details.html')
    ]);
}

// Load initial view
function initView() {
    if (window.location.hash === '#home' || window.location.hash === '') {
        getProducts().then(res => {
            getProductsView(res.data);
        }, err => {
            console.log("Error in retrieving product list");
        });
    }
}

init();

$(window).bind('hashchange', function (e) {
    initView();
});

// Fetch products based on search query
$('#input').on('input', function (e) {
    let searchStr = e.target.value;
    getSearchResults(searchStr).then(
        res => {
            // Show the freshly queried data
        }, err => {
            console.log(err);
        }
    );
});