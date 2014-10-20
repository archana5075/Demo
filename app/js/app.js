'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing_page.html', controller: 'LandingPageCtrl'});	
  $routeProvider.when('/page1', {templateUrl: 'partials/page1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/page2', {templateUrl: 'partials/page2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/page3', {templateUrl: 'partials/page3.html', controller: 'MyCtrl3'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
