app.factory('PostService', PostService);

function PostService() {
  var service = {
		get: function() {
			return posts;
		},
		write: function(id, txt) {
			// tim posts
			posts[id].comment.comment_txt += txt + ' ------   ';

		}
    };

   // function write(txt)
  return service;
}