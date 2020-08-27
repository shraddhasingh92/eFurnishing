// Get product details from the server
function showProduct(uid) {
    getProductDetails(data.uid).then(res => {
        window.location.href('#product');
        renderProductDetails(res.data)
    }, err => {
        console.log(err);
    });
}

// Load the details on UI
function renderProductDetails(selectedProduct) {
    setTimeout(function () {
        document.getElementById('product-name').innerHTML = selectedProduct.name;
        document.getElementById('product-type').innerHTML = selectedProduct.type;
        document.getElementById('product-desc').innerHTML = selectedProduct.description;
        document.getElementById('product-price').innerHTML = '$' + selectedProduct.price;

        document.getElementById('carousel-img-1').setAttribute('src', selectedProduct.imageGroup[0].url);
        document.getElementById('carousel-img-2').setAttribute('src', selectedProduct.imageGroup[1].url);
        document.getElementById('carousel-img-3').setAttribute('src', selectedProduct.imageGroup[2].url);

        document.getElementById('thumbnail-1').setAttribute('src', selectedProduct.imageGroup[0].url);
        document.getElementById('thumbnail-2').setAttribute('src', selectedProduct.imageGroup[1].url);
        document.getElementById('thumbnail-3').setAttribute('src', selectedProduct.imageGroup[2].url);

        loadColor(selectedProduct);

    }, 500);
}

// Mark the color availability on UI
function loadColor(selectedProduct) {
    var el = document.getElementById("colorContainer");
    let list = document.createElement('ul');
    list.className = 'color-wrap';
    var items = selectedProduct.availableColor;
    items.forEach(function (item) {
        let listItem = document.createElement('li');
        listItem.className = ("color-dot");
        listItem.style.backgroundColor = item.code;
        if (item.isSelected) {
            listItem.innerHTML = ('<i class="fa fa-check m-auto checkMark" aria-hidden="true"></i>');
        }
        list.appendChild(listItem);
    });
    el.appendChild(list);
}

// Add to Cart
function addToCart() {
    // Add the item to cart and return to home page
}