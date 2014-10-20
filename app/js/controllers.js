'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('LandingPageCtrl', ['$rootScope',function($rootScope) {
  	 $rootScope.num = '';
  }])
  .controller('MyCtrl1', ['$rootScope', function($rootScope) {
  	 $rootScope.num = 'Page 1';
  }])
  .controller('MyCtrl2', ['$rootScope', function($rootScope) {
     $rootScope.num = 'Page 2';
  }])
  .controller('MyCtrl3', ['$rootScope', function($rootScope) {
     $rootScope.num = 'Page 3';
  }]);
  