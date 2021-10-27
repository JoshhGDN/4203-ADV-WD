// Content for M1 Single Book
$(document).ready(function () {
    $.getJSON("./jsonsrc/singleBook.json", function (singleBook) {
 $('#singleGoogleBook').append(
            '<div class = "content"><span class = "image"><img src = ' + singleBook.volumeInfo.imageLinks.small + '></span>' +
            '<p><span class = "title"> Title:  </span> ' + singleBook.volumeInfo.title +
            '<br><span class = "title"> Subtitle: </span>' + singleBook.volumeInfo.subtitle +
            '<br><span class = "title"> Authors: </span>' + singleBook.volumeInfo.authors +
            '<br><span class = "title"> Publisher: </span>' + singleBook.volumeInfo.publisher +
            '<br><span class = "title"> Published Date: </span>' + singleBook.volumeInfo.publishedDate +
            '<br><span class = "title"> Description: </span>' + singleBook.volumeInfo.description +
            '<span class = "isbn"> ISBN #10: </span>' + singleBook.volumeInfo.industryIdentifiers[0].identifier +
            '<br><span class = "isbn">ISBN #13: </span>' + singleBook.volumeInfo.industryIdentifiers[1].identifier + '</p></div>'
            );
    });
});

// Content for M1 Book Listing 
$(document).ready(function () {
    $.getJSON("./jsonsrc/bookListing.json", function (listing) {
        for (var x = 0; x < listing.items.length; x++){
            $('#allBookListing').append (
            '<div class = "content"><span class = "image"><img src = ' + listing.items[x].volumeInfo.imageLinks.thumbnail + '></span>' +
            '<p><span class = "title"> Title:  </span> ' + listing.items[x].volumeInfo.title +
            '<br><span class = "title"> Subtitle: </span>' + listing.items[x].volumeInfo.subtitle +
            '<br><span class = "title"> Authors: </span>' + listing.items[x].volumeInfo.authors +
            '<br><span class = "title"> Publisher: </span>' + listing.items[x].volumeInfo.publisher +
            '<br><span class = "title"> Published Date: </span>' + listing.items[x].volumeInfo.publishedDate +
            '<br><span class = "title"> Description: </span>' + listing.items[x].volumeInfo.description +
            '<span class = "isbn"> ISBN #10: </span>' + listing.items[x].volumeInfo.industryIdentifiers[0].identifier +
            '<br><span class = "isbn">ISBN #13: </span>' + listing.items[x].volumeInfo.industryIdentifiers[1].identifier + '</p></div>'
            );
        }
    });
});