app.controller('HomeCtrl', ['$scope', function($scope)  {
	$scope.message = 'This is my Kick-Ass page message';
	$scope.kyle = 'This is pretty cool and it changes on the fly, that\'s cool';
	$scope.Author = "Kyle Parrish, 2014";
}]);

app.controller('KyleCtrl', ['$scope', function($scope)  {
	$scope.message = 'A totally new message asshole';
}]);

app.controller('AboutCtrl', ['$scope', function($scope)  {
	$scope.message = 'this is my about page';
}]);