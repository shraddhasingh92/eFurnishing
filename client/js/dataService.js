// Get list of products from server
function getProducts() {
    let prodUrl = BASE_URL + "api/products";
    return new Promise((resolve, reject) => {
        $.ajax({
            url: prodUrl,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (data) => { resolve(data); },
            error: (data) => { reject(data); }
        });
    });
}

// Get selected product from server based on passed id
function getProductDetails(uid) {
    let prodUrl = BASE_URL + "api/products/" + uid;
    return new Promise((resolve, reject) => {
        $.ajax({
            url: prodUrl,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (data) => { resolve(data); },
            error: (data) => { reject(data); }
        });
    });
}

// Get list of products from server based on search query
function getSearchResults(searchStr) {
    debugger;
    let prodUrl = BASE_URL + "api/search?text=" + searchStr;
    return new Promise((resolve, reject) => {
        $.ajax({
            url: prodUrl,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (data) => { resolve(data); },
            error: (data) => { reject(data); }
        });
    });
}