var app = angular.module('HeroApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/powers', {
        templateUrl: '/views/powers.view.html',
        controller: 'PowersController as vm'
    }).when('/heroes', {
        templateUrl: '/views/heroes.view.html',
        controller: 'HeroesController as vm'
    }).otherwise({
        template: '<h1>You done messed Up Boy</h1>'
    });
});