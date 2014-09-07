// creates the name 'KickStart' and the array is all the dependancies
var app = angular.module('KickStart', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/about', {
				templateUrl: '/views/about.html',
				controller: 'AboutCtrl'
			})
			.when('/kyle', {
				templateUrl: '/views/kyle.html',
				controller: 'KyleCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
}]);

