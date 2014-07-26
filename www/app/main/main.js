angular.module('fixed.main', [
  'fixed.main.photo'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.main', {
    abstract: true,
    url: '/main',
    templateUrl: 'app/main/main.tpl.html',
    controller: 'MainCtrl'
  });
})

.controller('MainCtrl', function() {
  console.log('MainCtrl');
});