angular.module('fixed.main.photo', [])

.config(function($stateProvider) {
  $stateProvider
  .state('app.main.photo', {
    url: '/photo',
    templateUrl: 'app/main/photo/photo.tpl.html',
    controller: 'PhotoCtrl'
  });
})

.controller('PhotoCtrl', function() {
  console.log('PhotoCtrl');
});