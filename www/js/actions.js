function onDeviceReady(evt) {
    var cameraBtn = document.getElementById('camera-btn');
    cameraBtn.addEventListener('touchend', cameraBtnTouchendEventHandler);

    var uploadBtn = document.getElementById('upload-btn');
    uploadBtn.addEventListener('touchend', uploadBtnTouchendEventHandler);
}

function showImage(imageUrl) {
    var image = document.getElementById('capture-image');
    image.src = imageUrl;
}

function getImageUrl() {
    var image = document.getElementById('capture-image');
    return image.src;
}

function showResult(err, msg) {
    if(err) {
        alert('Error: ' + err);
    } else {
        alert(msg);
    }
}

document.addEventListener('deviceready', onDeviceReady);
document.addEventListener('DOMContentLoaded', onDeviceReady);