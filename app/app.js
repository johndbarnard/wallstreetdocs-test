'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'highcharts-ng'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/dashboard', {
        templateUrl: 'components/dashboard/dashboardView.html',
        controller: 'DashboardCtrl',
        resolve: {
          factory: checkLoggedin
        }
      })
      .when('/login', {
        templateUrl: 'components/login/loginView.html',
        controller: 'LoginCtrl'
      })
      .otherwise({redirectTo: '/dashboard'});
}]);

function checkLoggedin($http, $q, $window, $location) {
  var token = $window.sessionStorage.token;
  var deferred = $q.defer();

  if(!token) {
    deferred.reject();
    $location.path('login');
  }

  $http.get("https://node01.wallstreetdocs.com/v0.1/test/ping", { Authorization: 'Bearer ' + token })
      .success(function (response) {
        deferred.resolve(true);
      })
      .error(function () {
        $window.sessionStorage.token = '';
        deferred.reject();
        $location.path('login');
      });
  return deferred.promise;
}
