// Get the list of products
function getProductsView(products) {
    let parent = document.getElementById('productsList');
    let timer = setInterval(function () {
        if (parent) {
            clearInterval(timer);
            renderProductView(parent, products);
            setPagination();
            return;
        }
    }, 1000);
}

// Load the list of products on UI
function renderProductView(parent, products) {
    for (let i = 0; i < products.length; i++) {
        let data = products[i];
        let topParentElem = document.createElement("div");
        topParentElem.className = ("unique-item-container col-md-4 no-gutter");

        let parentElem = document.createElement("div");
        parentElem.className = ("item-container");

        let childEle1 = document.createElement("div");
        childEle1.className = ("img-item img-fluid " + data.img);
        childEle1.onclick = function (ev) {
            getProductDetails(data.uid).then(res => {
                window.location.href = '#product';
                renderProductDetails(res.data)
            }, err => {
                console.log(err);
            });
        }

        let childEle2 = document.createElement("div");
        childEle2.className = ("white-box");

        let childEle3 = document.createElement("div");
        childEle3.className = ("item-title");
        childEle3.innerHTML = (data.name);
        childEle3.onclick = function (ev) {
            getProductDetails(data.uid).then(res => {
                window.location.href = '#product';
                renderProductDetails(res.data)
            }, err => {
                console.log(err);
            });
        }

        let childEle4 = document.createElement("div");
        childEle4.className = ("item-detail-top row");

        let subChild41 = document.createElement("div");
        subChild41.className = ("left-detail left-text col");
        subChild41.innerHTML = (data.type);

        let subChild42 = document.createElement("div");
        subChild42.className = ("right-detail right-text ml-auto");
        subChild42.innerHTML = ('$' + data.price);

        childEle4.appendChild(subChild41);
        childEle4.appendChild(subChild42);

        let childEle5 = document.createElement("div");
        childEle5.className = ("item-detail-bottom row");

        let subChild51 = document.createElement("div");
        subChild51.className = ("rating col-9");
        subChild51.style.width = '20em';
        for (let i = 0; i < data.rating; i++) {
            subChild51.innerHTML += '<span class="fa fa-star marked"></span>';
        }
        for (let i = 0; i < (5 - data.rating); i++) {
            subChild51.innerHTML += '<span class="fa fa-star unmarked"></span>';
        }

        let subChild52 = document.createElement("div");
        subChild52.className = ("cart-icon ml-auto");
        subChild52.innerHTML = ('<i class="fa fa-cart-plus cart-icon" aria-hidden="true"></i>');

        childEle5.appendChild(subChild51);
        childEle5.appendChild(subChild52);

        parentElem.appendChild(childEle1);
        parentElem.appendChild(childEle2);
        parentElem.appendChild(childEle3);
        parentElem.appendChild(childEle4);
        parentElem.appendChild(childEle5);
        topParentElem.appendChild(parentElem);
        parent.appendChild(topParentElem);
    }
}


