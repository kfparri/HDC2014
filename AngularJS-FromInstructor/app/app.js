/**
 * KickStart Module
 *
 * Angular Kick-Start Class
 */
var app = angular.module('KickStart', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                title: 'Home',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                title:'About Us',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/movies', {
                title: 'Movie List',
                templateUrl: 'views/movies.html',
                controller: 'MoviesCtrl'
            })
            .when('/movie/:id', {
                title: 'Movie Details',
                templateUrl: 'views/movie.html',
                controller: 'MovieCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        //$locationProvider.html5Mode(true);        

    }])
    .run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            console.log(current);
            $rootScope.title = current.$$route.title;
        });
    }]);
