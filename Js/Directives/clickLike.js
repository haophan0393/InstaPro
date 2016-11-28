app.directive('clickLike', function() {
	return {
		restrict: 'E',
		scope: {
			post: "="
		},
		template: '<button class="btn" ng-click="like(); increase()"><img src="Img/like-btn.jpg"></button>  <h3> {{post.count }} </h3>' ,
		link: function(scope,element,attrs) {
			scope.like = function() {
				element.toggleClass('btn-like');
			}
			scope.increase = function() {
				if (element.hasClass('btn-like')) {
					scope.post.count += 1;
				} else {
					scope.post.count -= 1;
				}
			}
						
		}
	};
});