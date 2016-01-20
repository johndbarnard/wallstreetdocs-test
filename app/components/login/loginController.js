'use strict';

angular.module('myApp')
    .controller('LoginCtrl', ['$scope', '$window', '$location', 'LoginService', function ($scope, $window, $location, LoginService) {
    $scope.user = {username: 'coding-test@wallstreetdocs.com', password: 'iamanawesomedeveloper'}; // TODO: remove!
    $scope.message = '';
    $scope.submit = function () {
      LoginService.login($scope.user)
          .then(function(token){
            $window.sessionStorage.token = token;
            $scope.message = 'Welcome';
            $location.path('dashboard');
          }, function(error){
            delete $window.sessionStorage.token;
            $scope.message = 'Invalid user or password';
          });
    };
  }]);
