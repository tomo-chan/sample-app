function onDeviceReady(evt) {
    var cameraBtn = document.getElementById('camera-btn');
    cameraBtn.addEventListener('click', cameraBtnTouchendEventHandler);

    var uploadBtn = document.getElementById('upload-btn');
    uploadBtn.addEventListener('click', uploadBtnTouchendEventHandler);

    var showImagesBtn = document.getElementById('showimages-btn');
    showImagesBtn.addEventListener('click', showImagesBtnTouchendEventHandler);
}

function showImage(imageUrl) {
    var image = document.getElementById('capture-image');
    image.src = imageUrl;
}

function getImageUrl() {
    var image = document.getElementById('capture-image');
    return image.src;
}

function showImageList(images) {
    var ul = document.getElementById('image-list');
    var li = document.createElement('li');
    var anchor = document.createElement('a');
    images.forEach(function(image) {
        var l = li.cloneNode();
        var a = anchor.cloneNode();
        a.href = image;
        l.appendChild(a);
        ul.appendChild(l);
    });
}

function showResult(err, msg) {
    if(err) {
        alert('Error: ' + err);
    } else {
        alert(msg);
    }
}

document.addEventListener('deviceready', onDeviceReady);