// Grid and List View for Milestone 4
function enableGrid() {
    $("#result").css("width", "20%").css("height", "150px");
    $("#collection").css("width", "20%").css("height", "150px");

}
function enableList() {

}
// All JavaScript source code regarding milestone 4
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
// onSubmit 
$(document).ready(function(){
    $("#m3Form").submit(function(){
        var search = $("#bookSearch").val();

        if(search == ''){
            alert("Please Enter a Book");
        } else {
            var url = '';
            var img = '';
            var title = '';
            var author = '';
            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response){
                for(i = 0; i < response.items.length; i++){
                    title = $('<h3> <a href=' + response.items[i].volumeInfo.infoLink + '>' + response.items[i].volumeInfo.title + '</a></h3>');
                    author = $('<h5 style="color:white">' + response.items[i].volumeInfo.authors + '</h5>');
                    img = $('<img><br> <a href =' + response.items[i].volumeInfo.infoLink + '></img>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;

                    img.attr('src', url);
                    title.appendTo("#result");
                    img.appendTo("#result");
                }
            });
        }
        return false;
    });
});

