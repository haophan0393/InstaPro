app.directive('feedsterPost', function($timeout){
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    template: ' <img class="avatar" ng-src="{{ post.author.avatar }}"  ><div class="author-name"> {{ post.author.name }}  </div> <img class="like-img" src="Img/like-btn.jpg" ng-show="IsShow == true" > <p class="comment-text">  {{ post.comment.text }} </p><img class="comment-img" ng-src="{{ post.comment.img }}" ng-dblclick="increase(); toggle()" > ',
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