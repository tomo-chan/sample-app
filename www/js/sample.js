function cameraBtnTouchendEventHandler(evt) {
    navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback);
}

function cameraSuccessCallback(imageUrl) {
    console.log('success');
    var image = document.getElementById('capture-image');
    image.src = imageUrl;
}

function cameraFailureCallback(msg) {
    alert('Error: '+ msg);
}

function uploadBtnTouchendEventHandler(evt) {
    var ft = new FileTransfer();
    var image = document.getElementById('capture-image');
    ft.upload(image.src, encodeURI(ENV.serverurl + "api/v1/images"), 
      uploadSuccessCallback, uploadFailureCallback);
}

function uploadSuccessCallback(result) {
    alert('success');
}

function uploadFailureCallback(error) {
    alert(error.code);
}