app
.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.message = 'My Kick-Start Home Page';
}])
.controller('AboutCtrl', ['$scope', function ($scope) {
	$scope.message = 'This is the about us page';
}])
.controller('MoviesCtrl', ['$scope', 'MovieService', function ($scope, movieService) {

	movieService.ListMovies()
		.success(function(items){
		ctrl.movies = items;
	});

	$scope.creating = false;
	
	$scope.newMovie = {};

	$scope.showMovieForm = function(){
		$scope.creating = true;
	};
	
	$scope.addMovie = function(){
		movieService.AddMovie($scope.newMovie)
		.success(function(movie){
			$scope.movies.push(movie);
			$scope.newMovie = {};
		});
	};

	$scope.order = 'title';

	$scope.sortBy = function(field){
		$scope.order = field;
	};
}])
.controller('MovieCtrl', ['$scope', 'MovieService', '$routeParams', function ($scope, movieService, $routeParams) {
	var id = $routeParams.id;	
	movieService.GetMovie(id).success(function(item){
		$scope.movie = item;
	});
}]);