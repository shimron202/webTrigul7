console.log('AngularJS controller is running');
var app = angular.module('myApp', []);

app.controller('GalleryController', function($scope) {
    // Array of image URLs
    var imageUrls = [];
    for (var i = 0; i < 2; i++) {
        var innerArray = [];
        for (var j = 0; j < 10; j++) {
            innerArray.push('https://picsum.photos/200/300?random=' + (i * 10 + j));
        }
        imageUrls.push(innerArray);
    }
    $scope.galleryRows = imageUrls;
    $scope.mainPicUrl=imageUrls[0][0]
    $scope.updateMainPic = function(url) 
    {
        console.log('cahngfing url');
        $scope.mainPicUrl = url;
    };

});
