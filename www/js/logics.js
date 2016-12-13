function cameraBtnTouchendEventHandler(evt) {
    navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback);
}

function cameraSuccessCallback(imageUrl) {
    console.log('success');
    showImage(imageUrl);
}

function cameraFailureCallback(msg) {
    showResult(msg);
}

function uploadBtnTouchendEventHandler(evt) {
    var imageUrl = getImageUrl();
    var ft = new FileTransfer();
    ft.upload(imageUrl, encodeURI(ENV.serverurl + "api/v1/images"), 
      uploadSuccessCallback, uploadFailureCallback);
}

function uploadSuccessCallback(result) {
    showResult(null, 'success');
}

function uploadFailureCallback(error) {
    showResult(error.code);
}