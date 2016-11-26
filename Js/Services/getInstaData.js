app.factory('PostService', PostService);

function PostService() {
  var service = {
		get: function() {
			return posts;
		},
		write: function(id, txt) {
			console.log('PostService', id, txt)
			// tim posts
			posts[0].comment.comment_txt = txt;

		}
    };

   // function write(txt)
  return service;
}