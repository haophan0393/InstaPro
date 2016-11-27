app.factory('UserService', UserService);

function UserService(){
	var service = {
		get: function(){
			return users;
		}
	}

	return service;
}