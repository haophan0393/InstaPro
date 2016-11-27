app.directive('showUser', ShowUser);

ShowUser.$inject = ['UserService'];

function ShowUser(UserService) {
	return {
		restrict: 'E',
		scope: {
			user: '='
		},
		template: '<div class="oneuser"><img class="avatar_" ng-src="{{ user.avatar }}" ><div class="fname">{{ user.firstname }}</div></div>'

	};
}

