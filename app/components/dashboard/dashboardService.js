'use strict';

angular.module('myApp').factory('DashboardService', ['$http','$q','$window', 'API_URLS',function ($http, $q, $window, API_URLS) {
  var dashboardService = {};

  dashboardService.health = function() {
    var token = $window.sessionStorage.token;

    if (!token) return $q(function(resolve, reject) {
      reject('no token');
    });

    return $q(function (resolve, reject) {
      $http({
        method: 'GET',
        url: API_URLS.healthCheck,
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .success(function(data){
          resolve(data);
        })
        .error(function(data){
          reject('Invalid data');
          console.log(data);
        });
    });
  };

  dashboardService.chart = function(type, title, data) {
    if(type!='pie') return null; // Only supporting pie ;)

    var chartConfig = chartConfigTemplate;
    var seriesData = [];

    for(var key in data) {
      if(data.hasOwnProperty(key)){
        seriesData.push({
          name: key,
          y: parseFloat(data[key].replace(/^\D+/g, ''))
        })
      }
    }

    chartConfig.series = [{
      data: seriesData
    }];

    chartConfig.title.text = title;
    chartConfig.options.chart.type = type;

    return chartConfig;
  };

  var chartConfigTemplate = {
    options: {
      chart: {
        type: 'pie'
      },
      tooltip: {
        style: {
          padding: 10,
          fontWeight: 'bold'
        }
      }
    },
    series: [],
    title: {
      text: undefined
    },
    loading: false,
    xAxis: {
      currentMin: 0,
      currentMax: 20,
      title: {text: 'values'}
    },
    useHighStocks: false
  };

  return dashboardService;
}]);
