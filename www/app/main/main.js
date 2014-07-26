angular.module('fixed.main', [])

.config(function($stateProvider) {
  $stateProvider
  .state('app.main', {
    url: '/main',
    templateUrl: 'app/main/main.tpl.html',
    controller: 'MainCtrl'
  });
})

.controller('MainCtrl', function() {
  console.log('MainCtrl');
});