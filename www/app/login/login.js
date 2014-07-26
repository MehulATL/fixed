angular.module('fixed.login', [])

.config(function($stateProvider) {
  $stateProvider
  .state('app.login', {
    url: "/login",
    templateUrl: 'app/login/login.tpl.html',
    controller: 'LoginCtrl'
  });
})

.controller('LoginCtrl', function($scope, $state) {
  console.log('LoginCtrl');
});