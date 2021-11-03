// All JavaScript source code regarding milestone 3
function openLibrary() {
    $(document).ready(function(){
        var url = "https://www.googleapis.com/books/v1/users/101130678356918966260/bookshelves/1001/volumes";
        $.getJSON (url, function(json){				
            $.each(json.items, function(){
                $('#collection').append('<h2> <a href = "Milestone 2 Book Details.html?id='+ this.id +'">' 
                + this.volumeInfo.title  +'</a></h2>'  
                +'<img src="' + this.volumeInfo.imageLinks.thumbnail + '>' 
                + '<p style = "clear: both"</p>');
            });
        });
    });
}