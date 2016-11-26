app.directive('showTemporary', ['$timeout', function ($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			
			$timeout(function(){element.css('display', 'none')}, +attr.hideDelay);
		}
	}
}]);