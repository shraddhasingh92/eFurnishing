function setPagination() {
    pageSize = 4; // Number of products to show on each page 
    var pageCount = Math.ceil($(".unique-item-container").size() / pageSize);

    for (var i = 0; i < pageCount; i++) {
        if (i == 0) {
            $("#pagin").append('<li class="page-item"><a class="page-link current" href="#">' + (i + 1) + '</a></li>');

        } else {
            $("#pagin").append('<li class="page-item"><a class="page-link" href="#">' + (i + 1) + '</a></li>');
        }
    }

    showPage(1); // Default loading

    $("#pagin li a").click(function () {
        $("#pagin li a").removeClass("current");
        $(this).addClass("current");
        showPage(parseInt($(this).text()));
        event.preventDefault();
    });
}

function showPage(page) {
    $(".unique-item-container").hide();
    $(".unique-item-container").each(function (n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page)
            $(this).show();
    });
}