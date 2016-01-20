'use strict';

angular.module('myApp').factory('LoginService', ['$http','$q','$window', '$location', 'API_URLS', function ($http, $q, $window, $location, API_URLS) {
  var loginService = {};

  loginService.login = function(credentials) {

    return $q(function (resolve, reject) {
      $http.post(API_URLS.login, credentials)
          .success(function(data){
            if(!data.hasOwnProperty('token')) reject(data);
            resolve(data.token);
          })
          .error(function(data){
            reject();
            console.log(data);
          });
    });

  };

  return loginService;
}]);
