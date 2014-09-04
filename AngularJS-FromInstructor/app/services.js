app.factory('MovieService', function($http){
		
		var	listMovies = function(){
				return $http.get('http://api.democode.us/movies');
			},
			getMovie = function(id){
				return $http.get('http://api.democode.us/movies/' + id);
			},
			addMovie = function(movie){
				return $http.post('http://api.democode.us/movies', movie);
			};

		return {
			ListMovies: listMovies,
			GetMovie: getMovie,
			AddMovie: addMovie
		};

	});