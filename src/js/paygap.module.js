(function() {
  'use strict';
  let app = angular.module('paygap', ['ngRoute']);
      app.config([ '$routeProvider',
      function($routeProvider) {
          $routeProvider
          .when('/aboutus', {
              templateUrl : 'views/aboutus.template.html'

          });
      }
  ]);
}());
