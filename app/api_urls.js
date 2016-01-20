'use strict';

angular.module('myApp').constant('API_URLS', {
  ping: 'https://node01.wallstreetdocs.com/v0.1/test/ping',
  login: 'https://node01.wallstreetdocs.com/v0.1/auth/login',
  healthCheck: 'https://node01.wallstreetdocs.com/v0.1/test/health'
});
