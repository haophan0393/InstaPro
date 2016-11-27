app.controller('PostController', ['$scope', 'PostService','UserService', function($scope, PostService, UserService) {
 $scope.posts = PostService.get();
 $scope.users = UserService.get();
}
]);