var app = angular.module('app', ['ngMaterial','ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	  when('/', {
		templateUrl: 'pagess/home.html',
		controller: 'HomeController'
	  }).
	  when('/blog', {
		templateUrl: '/pages/blog.html',
		controller: 'BlogController'
	  }).
	  when('/works', {
		templateUrl: '/pages/works.html',
		controller: 'WorksController'
	  }).
	  when('/profile', {
		templateUrl: '/pages/profile.html',
		controller: 'ProfileController'
	  }).
	  otherwise({
		redirectTo: '/'
	  });
}]);