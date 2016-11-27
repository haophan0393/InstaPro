app.controller('PostController', ['$scope', 'PostService', 'Upload', '$timeout', function($scope, PostService, Upload, $timeout) {
 $scope.posts = PostService.get();
 $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
      data: {username: $scope.username, file: file},
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    var post = {
            id: $scope.posts.length+1,
            author: {
                name: $scope.username,
                avatar: 'Img/purple.svg'
            },
            comment: {
                img: 'Img/Itachi.jpg',
                text: $scope.description,
                comment_txt: 'justtesting'
            },
            count: 100,
            validate: false
        };
        $scope.posts.push(post);
    };
}]);