app.controller('PostController', ['$scope', 'PostService','UserService', 'Upload', '$timeout', function($scope, PostService,UserService, Upload, $timeout) {
 $scope.posts = PostService.get();
 $scope.users = UserService.get();
 $scope.commentArray = [];
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
    });
    var post = {
            id: $scope.posts.length,
            author: {
                name: $scope.username,
                avatar: 'Img/purple.svg'
            },
            comment: {
                img: 'Img/Itachi.jpg',
                text: $scope.description,
                comment_txt: ''
            },
            count: 0,
            validate: false
        };
        $scope.posts.push(post);
        $scope.username="";
        $scope.picFile=null;
        $scope.description="";
    };

}]);