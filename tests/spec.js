var assert = chai.assert;

describe('sample.js', function() {

  before(function(){
    if(navigator && !navigator.camera) {
      navigator.camera = {};
      navigator.camera.getPicture = function(scb, fcb, opt) {};
    }
    if(!window.FileTransfer) {
      window.FileTransfer = function() {};
      window.FileTransfer.prototype.upload = function(src, url, scb, fcb) {};
    }
  });
  beforeEach(function() {
    alert = sinon.spy();
  });

  describe('cameraBtnTouchendEventHandler', function() {
    it('should get image url', function() {
      uploadBtnTouchendEventHandler();
    });
  });
  describe('cameraSuccessCallback', function() {
    it('should get image url', function() {
      var uri = 'tests/files/test.jpg';
      cameraSuccessCallback(uri);
      var img = document.getElementById('capture-image');
      expect(img.src).to.contains(uri);
    });
  });
  describe('cameraFailureCallback', function() {
    it('should get alert', function() {
      cameraFailureCallback('error');
      expect(alert.args[0][0]).to.equal('Error: error');
    });
  });

  describe('uploadBtnTouchendEventHandler', function() {
    it('should upload image', function() {
      uploadBtnTouchendEventHandler();
    });
  });
  describe('uploadSuccessCallback', function() {
    it('should success', function() {
      uploadSuccessCallback({"responseCode": 200, "response": "", "bytesSent": 100});
      expect(alert.args[0][0]).to.equal('success');
    });
  });
  describe('uploadFailureCallback', function() {
    it('should get alert', function() {
      uploadFailureCallback({"code": -1, "source": "src", "target": "target"});
      expect(alert.args[0][0]).to.equal(-1);
    });
  });
});