(function () {
'use strict';

angular.module('restaurant', ['ngRoute'])
.config(RoutesConfig);

RoutesConfig.$inject = ['$routeProvider'];
function RoutesConfig($routeProvider) {
  $routeProvider
    .when('/signup', {
      templateUrl: 'signup.html',
      controller: 'SignUpController as signUpCtrl'
    })
    .when('/myinfo', {
      templateUrl: 'myinfo.html',
      controller: 'MyInfoController as myInfoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}
})();
