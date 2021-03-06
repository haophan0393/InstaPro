app.directive('commentPost', CommentPost);

CommentPost.$inject = ['PostService']

function CommentPost(PostService){
  return {
    restrict: 'E',
    scope: {
      post: '=',
    },
    template: `
      </br></br>
      <h3>Comments</br></br></h3>
      <div><form><input class="comment_box" type="text" ng-model="comment_input"><div></form> 
      <button ng-click="write()" class="comment_send">Enter</button></div></br><br/></div><textarea style="background-color:white" rows="5" cols="54" class="comment_area"> {{ post.comment.comment_txt }} </textarea> `,
    link: function(scope,element,attrs) {
      scope.write = function() {
        // scope.post.comment.comment_txt += scope.comment_input;
          PostService.write(scope.post.id, scope.comment_input);
          scope.comment_input = '';
      }
    }
  };
}