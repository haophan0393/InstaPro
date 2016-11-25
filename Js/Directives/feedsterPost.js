app.directive('feedsterPost', function(){
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    template: ' <img class="avatar" ng-src="{{ post.author.avatar }}"  ><h3 class="author-name"> {{ post.author.name }} </h3><p class="comment-text">  {{ post.comment.text }} </p><img class="comment-img" ng-src="{{ post.comment.img }}"  > '
   
  };
});