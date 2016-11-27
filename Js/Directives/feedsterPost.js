app.directive('feedsterPost', function($timeout){
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    template: ' <img class="avatar" ng-src="{{ post.author.avatar }}"  ><div class="author-name" title="Test Hover"> {{ post.author.name }}  </div> <img class="like-img" src="Img/like-btn.jpg" ng-show="IsShow == true" > <p class="comment-text">  {{ post.comment.text }} </p><a href="{{ post.comment.img }}" data-lightbox="{{ post.comment.img }}" data-title="{{ post.comment.text }}"><img class="comment-img" ng-src="{{ post.comment.img }}" ng-dblclick="increase(); toggle()" ></a> ',
   	link: function(scope,element,attrs) {
   		scope.increase = function() {
   			
   			scope.post.count += 1;
  
   		};
   		scope.toggle = function() {
       		scope.post.validate = !scope.post.validate;
       		$timeout(function() {
       			scope.post.validate = !scope.post.validate;
       		},1000)
   		};
   	}
  };
});