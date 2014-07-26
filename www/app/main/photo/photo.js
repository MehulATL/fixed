angular.module('fixed.main.photo', [])

.config(function($stateProvider) {
  $stateProvider
  .state('app.main.photo', {
    url: '/photo',
    templateUrl: 'app/main/photo/photo.tpl.html',
    controller: 'PhotoCtrl'
  });
})

.controller('PhotoCtrl', function($scope, $state, $cordovaCamera) {
  console.log('PhotoCtrl');

  $scope.takePhoto = function(source) {
    var options = {
      quality : 100,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType[source],
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 800,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options)
    .then(function(imageData) {
      var image = document.getElementById('preview');
      image.src = 'data:image/jpeg;base64,' + imageData;
    }, function(err) {
      console.log('camera err => ', err);
    });
  };

});