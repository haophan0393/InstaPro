(function(window, angular, undefined) {
'use strict';
/**
 * AngularJS directives for social sharing buttons - Facebook Like, Google+, Twitter and Pinterest 
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (http://jasonwatmore.com)
 * @version 1.0.0
 */

window.loadScript = function (id, url, callback) {
	var s = window.document.getElementById(id);
	if(!s) {
	    s = window.document.createElement('script'); // use global document since Angular's $document is weak
	    s.type = 'text/javascript';
	    s.src = url;
	    s.async = true;
	    s.id = id;
	    s.onload = function() {
	    	if(callback) {
				callback();
			}
	    };
	    window.document.body.appendChild(s);
	} else {
		if(callback) {
			callback();
		}
	}
};

var fbLike = ['$window', '$rootScope', function ($window, $rootScope) {
    return {
              restrict: 'A',
              scope: {
                  fbLike: '=?'
              },
              link: function (scope, element, attrs) {

            	  var watchAdded = false;
                  function renderLikeButton() {
                      if (!!attrs.fbLike && !scope.fbLike && !watchAdded) {
                          // wait for data if it hasn't loaded yet
						  watchAdded = true;
                          var unbindWatch = scope.$watch('fbLike', function (newValue, oldValue) {
						      if (newValue) {
							      renderLikeButton();
								  
								  // only need to run once
								  unbindWatch();
							  }
                              
                          });
                          return;
                      } else {
                          element.html('<div class="fb-like"' + (!!scope.fbLike ? ' data-href="' + scope.fbLike + '"' : '') + ' data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>');
                          $window.FB.XFBML.parse(element.parent()[0]);
                      }
                  }
                 
                  renderLikeButton();
              }
          };
      }
  ];

var googlePlus = [ '$window', function ($window) {
          return {
              restrict: 'A',
              link: function (scope, element, attrs) {
                  function renderPlusButton() {
                      element.html('<div class="g-plusone" data-size="medium"></div>');
                      $window.gapi.plusone.go(element.parent()[0]);
                  }
                  renderPlusButton();
              }
          };
      }
];

var tweet = ['$window', function ($window) {
          return {
              restrict: 'A',
              scope: {
                  tweet: '='
              },
              link: function (scope, element, attrs) {
				  var watchAdded = false;
                  function renderTweetButton() {
                      if (!scope.tweet && !watchAdded) {
                          // wait for data if it hasn't loaded yet
						  watchAdded = true;
                          var unbindWatch = scope.$watch('tweet', function (newValue, oldValue) {
						      if (newValue) {
                                  renderTweetButton();
							  
							      // only need to run once
							      unbindWatch();
							  }
                          });
                          return;
                      } else {
                          element.html('<a href="https://twitter.com/share" class="twitter-share-button" data-text="' + scope.tweet + '">Tweet</a>');
                          $window.twttr.widgets.load(element.parent()[0]);
                      }
                  }
                  renderTweetButton();
              }
          };
      }
];

var pinIt = ['$window', '$location', function ($window, $location) {
          return {
              restrict: 'A',
              scope: {
                  pinIt: '=',
                  pinItImage: '='
              },
              link: function (scope, element, attrs) {
				  var watchAdded = false;
                  function renderPinItButton() {
                      if (!scope.pinIt && !watchAdded) {
                          // wait for data if it hasn't loaded yet
						  watchAdded = true;
                          var unbindWatch = scope.$watch('pinIt', function (newValue, oldValue) {
						      if (newValue) {
							      renderPinItButton();
								  
								  // only need to run once
								  unbindWatch();
							  }
                          });
                          return;
                      } else {
                          scope.pinItUrl = $location.absUrl();
                          element.html('<a href="//www.pinterest.com/pin/create/button/?url=' + scope.pinItUrl + '&media=' + scope.pinItImage + '&description=' + scope.pinIt + '" data-pin-do="buttonPin" data-pin-config="beside"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" /></a>');
                          $window.parsePins(element.parent()[0]);
                      }
                  }
                  
                  if (!$window.parsePins) {
                      // Load Pinterest SDK if not already loaded
                      (function (d) {
                          var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
                          p.type = 'text/javascript';
                          p.async = true;
                          p.src = '//assets.pinterest.com/js/pinit.js';
                          p['data-pin-build'] = 'parsePins';
                          p.onload = function () {
                              if (!!$window.parsePins) {
                                  renderPinItButton();
                              } else {
                                  setTimeout(p.onload, 100);
                              }
                          };
                          f.parentNode.insertBefore(p, f);
                      }($window.document));
                  } else {
                      renderPinItButton();
                  }
              }
          };
      }
];



var Angulike = window.angular.module('angulike', []);
Angulike.directive('fbLike', fbLike);
Angulike.directive('tweet', tweet);
Angulike.directive('googlePlus', googlePlus);
Angulike.directive('pinIt', pinIt);
Angulike.run(['$window', '$rootScope', function($window, $rootScope){
	$window.loadScript('gapi-script', '//apis.google.com/js/platform.js', function(){
		$window.loadScript('tweeter-script', '//platform.twitter.com/widgets.js', function(){
			var lang = $rootScope.facebookLang;
			if(!lang) {
				lang = 'en_US';
			}
			$window.loadScript('fb-script', '//connect.facebook.net/'+lang+'/sdk.js', function(){
				$window.FB.init({
		            appId: $rootScope.facebookAppId,
		            xfbml: true,
		            version: 'v2.0'
		        });
			});		
		});
	});
}]);

})(window, window.angular);

