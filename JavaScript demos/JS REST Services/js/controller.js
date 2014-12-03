var URL = "https://api.parse.com/1/classes/Book";

function clearWrapper() {
    $("#wrapper").empty();
}

function success(data) {
    noty({
        text: "Successfully loaded data from AJAX",
        layout: "topCenter",
        timeout: 2000
    });

    //insertAllBooksInDOM
    insertAllBooksInDOM(data);
}

function error() {
    noty({
        text: "Cannot load AJAX data.",
        type: "error",
        layout: "topCenter",
        timeout: 5000
    });
}

function insertAllBooksInDOM(data) {
    $.each(data.results, function(index, val) {

        var deleteButton = $("<button class=\"book-delete-btn\">X</button>");
        var editButton = $("<button class=\"book-edit-btn\">EDIT</button>");
        
        var $p = $("<p>").attr("id", data.results[index].objectId);
        deleteButton.appendTo($p);
        editButton.appendTo($p);

        $("<span>")
                .text("TITLE: ")
                .attr("class", "titleStyle")
                .appendTo($p);


        $("<span>")
            .text(data.results[index].title + " | ")
            .appendTo($p);

        $p.append($("<span>")
            .text("AUTHOR: ")
            .attr("class", "authorStyle"));

        $("<span>")
            .text(data.results[index].author + " | ")
            .appendTo($p);

        $p.append($("<span>")
            .text("ISBN number: ")
            .attr("class", "isbnStyle"));

        $("<span>")
            .text(data.results[index].isbn)
            .appendTo($p);

        $p.fadeIn(1300).appendTo("#wrapper");

    });
}

function loadAllBooksFromServer() {
    ajaxRequester.get(URL, success, error);
}

// DELETE BOOK
$("#wrapper").on("click", ".book-delete-btn", deleteBook);

function deleteBook(ev) {
    var bookId = $(this).parent().attr("id");
    var URLWithId = URL + "/" + bookId;
    ajaxRequester.delete(URLWithId,
        function(data) {
            $(ev.target)
            .parent()
            .remove();
        },
        error);
}

// EDIT BOOK
$("#wrapper").on("click", ".book-edit-btn", drawEditMenu);

function drawEditMenu() {
    var bookId = $(this).parent().attr("id");
    $("#" + bookId).append($("#editMenu").fadeIn(1300));

    // Send BOOK
    $("#buttonSendEditBook").on("click", sendBookEdit);

    function sendBookEdit() {
        var titleNewVal = $("#titleForEdit").val();
        var authorNewVal = $("#authorForEdit").val();
        var ISBNNewVal = $("#ISBNForEdit").val();


        var postBookJSONString = "{" + "\"" + "title" + "\"" + ":" + "\"" + titleNewVal + "\"" + "," + "\"" + "author" + "\"" + ":" + "\"" + authorNewVal + "\"" + "," + "\"" + "isbn" + "\"" + ":" + "\"" + ISBNNewVal + "\"" + "}";


        var postBookJSONObj = JSON.parse(postBookJSONString);
        var URLWithId = URL + "/" + bookId;

        ajaxRequester.put(URLWithId, postBookJSONObj, success, error)
            .then(clearWrapper())
            .then(loadAllBooksFromServer());
    }
}

//POST BOOK
$("#buttonCreateBook").click(postBook);

function postBook() {
    var titleVal = $("#title").val();
    var authorVal = $("#author").val();
    var ISBNVal = $("#ISBN").val();

    var postBookJSONString = "{" + "\"" + "title" + "\"" + ":" + "\"" + titleVal + "\"" + "," + "\"" + "author" + "\"" + ":" + "\"" + authorVal + "\"" + "," + "\"" + "isbn" + "\"" + ":" + "\"" + ISBNVal + "\"" + "}";

    var postBookJSONObj = JSON.parse(postBookJSONString);

    ajaxRequester.post(URL, postBookJSONObj, success, error)
        .then($("#editMenu").hide())
        .then(clearWrapper())
        .then(loadAllBooksFromServer());
}
