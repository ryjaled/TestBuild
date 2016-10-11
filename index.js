(function(){
"use strict";

  document.addEventListener('devideready', onDeviceReady.bind(this), false);
  var pictureSource;
  var destinationType;

function onDeviceReady()
{
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.destinationType;

document.getElementById("capturePhoto").onclick = function () {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality : 50,

    destinationType : destinationType.DATA_URL
  });
}

};

function onPhotoDataSuccess(imageData)
{

  var smallImage = document.getElementById('smallImage');
  smallImage.style.display = 'block';
  smallImage.src = "data:image/jpeg;base64," + imageData;
}


})();
