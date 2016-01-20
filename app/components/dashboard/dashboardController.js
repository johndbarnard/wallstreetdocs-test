'use strict';

angular.module('myApp')
    .controller('DashboardCtrl', ['$scope', 'DashboardService', function($scope, DashboardService) {

      $scope.health = {};

      $scope.$watch('health', function(newVal, oldVal){
        if(!!newVal && (newVal != oldVal)) {
          if(newVal.hasOwnProperty('diskSpace')) {
            $scope.diskspaceChart = DashboardService.chart('pie', 'Diskspace', newVal.diskSpace);
          }
        }
      });

      DashboardService.health().then(function(health){
        $scope.message = '';
        $scope.health = health;
      }, function(error){
        $scope.message = error;
        $scope.health = {};
      });
    }]);
