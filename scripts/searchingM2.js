// When enter is clicked 
$(document).ready(function(){
    $("#myForm").submit(function(){
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
                    author.appendTo("#result");
                    img.appendTo("#result");
                }
            });
        }
        return false;
    });
});