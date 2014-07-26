angular.module('fixed', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '',
    abstract: true,
    templateUrl: 'app/app.tpl.html',
  });

  $urlRouterProvider.otherwise('/');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})