app.controller('PostController', ['$scope', function($scope) {
	$scope.posts = [
    {
          author: {
            name: 'Itachi',
            avatar: 'Img/purple.svg'
          },
          comment: {
            img: 'Img/Itachi.jpg',
            text: 'It is foolish to fear what we have yet to see and know.'
          },
          count: 100
    },

		{
      		author: {
        		name: 'Hidan',
        		avatar: 'Img/blue.svg'
      		},
      		comment: {
        		img: 'Img/Hidan.jpg',
        		text: 'I may not look the part, but Im quite religious !'
      		},
          count: 100
    	},


    	{
      		author: {
        		name: 'Kisame',
        		avatar: 'Img/purple.svg'
      		},
      		comment: {
      			img: 'Img/Kisame.jpg',
        		text: 'You do not know what kind of human you are until the very end.'
      	  },
          count: 100
    },

    {
          author: {
            name: 'Deidara',
            avatar: 'Img/blue.svg'
          },
          comment: {
            img: 'Img/Deidara.jpg',
            text: 'Art is a bang !'
          },
          count: 100
    },

    {
          author: {
            name: 'Kakuzu',
            avatar: 'Img/purple.svg'
          },
          comment: {
            img: 'Img/Kakuzu.jpg',
            text: 'Bounty hunter of Takigakure.'
          },
          count: 100
    },

    {
          author: {
            name: 'Konan',
            avatar: 'Img/blue.svg'
          },
          comment: {
            img: 'Img/Konan.jpg',
            text: 'Because you are darkness, a world without light where flowers can only wither and die!'
          },
          count: 100
    },

    {
          author: {
            name: 'Nagato',
            avatar: 'Img/purple.svg'
          },
          comment: {
            img: 'Img/Nagato_Pain.png',
            text: 'Those who do not understand true pain can never understand true peace.'
          },
          count: 100
    }

	];

 
}]);