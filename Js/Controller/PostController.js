app.controller('PostController', ['$scope', 'PostService', function($scope, PostService) {
 $scope.posts = PostService.get();
}]);