var app = {
    // Application Constructor
    initialize: function(){
        document.getElementById('btn').addEventListener('click', app.takephoto);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    takephoto: function() {
        let opts = {
            quality:80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 500, 
            targetHeight: 400,
         };
        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    ftw: function(imgURI) {
        let pic = document.getElementById('photo');
        pic.src = 'data:image/jpeg;base64,' + imgURI;
    },
    wtf: function(msg) {
        document.getElementById('msg').textContent = msg;
    }
};

app.initialize();