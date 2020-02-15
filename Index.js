var button = document.querySelector('button')
var resultContainer = document.querySelector('#result')
button.addEventListener('click', function( ) {
  let movieName = $('#movie').val();

  $.ajax('https://api.themoviedb.org/3/search/movie?api_key=6af6582e4eb5ba81b0db6b8c582d67a4&query='+


   movieName)
    .done(function(response) {
      $('#result').empty();

      for (var i = 0; i < response.results.length; i++) {
        let movie = response.results[i];
        let title = movie.title;
        let overview = movie.overview;
        let poster = movie.backdrop_path;
        let popularity = movie.popularity;
        let release = movie.release_date;
        let rating = movie.vote_average;
        let img_url = "https://image.tmdb.org/t/p/w500" + response.results[i].poster_path;
        $('#result').append('<h3>'+'<strong id="title">'+title+'</strong> '+
          '<div id = "small" class="swing"><img id = "posterImage" src = ' +
              img_url +
              '>'
              +
          '</h3><h1><strong class="colors">Overview: </strong> <br><br>' +
                            overview +'</h1>'+'</h3><h1><strong class="colors">Popularity: </strong> '
          +popularity+
          '</h1>'+'</h3><h1><strong class="colors">Release Date: </strong> '+release+
          '</h1>'+'</h3><h1><strong class="colors">Rating: </strong> '+rating+'<br><br>'+


          '</h1><hr>');
      }
      console.log(response);
    })
    .fail(function(error) {
      console.log(error);
    });
})
