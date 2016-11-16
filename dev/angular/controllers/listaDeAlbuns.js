app.controller('listaDeAlbunsController', ['$scope', function($scope){

	$scope.albuns = [
		{
			name : "Nine Lives",
			year : 1997,
			artist : "Aerosmith",
			cover : "dev/img/nine-lives.jpg",
			favorite : true,
			favoriteToggle : function(){
				this.favorite = !this.favorite;
			}
		},
		{
			name : "Honkin On Bobo",
			year : 2004,
			artist : "Aerosmith",
			cover : "dev/img/honkin-on-bobo.jpg",
			favorite : true,
			favoriteToggle : function(){
				this.favorite = !this.favorite;
			}
		},
		{
			name : "Fear Of The Dark",
			year : 1992,
			artist : "Iron Maiden",
			cover : "dev/img/fear-of-the-dark.jpg",
			favorite : false,
			favoriteToggle : function(){
				this.favorite = !this.favorite;
			}
		},
		{
			name : "Dance Of Death",
			year : 2003,
			artist : "Iron Maiden",
			cover : "dev/img/dance-of-death.jpg",
			favorite : false,
			favoriteToggle : function(){
				this.favorite = !this.favorite;
			}
		},
		{
			name : "Kill 'Em All",
			year : 1983,
			artist : "Metallica",
			cover : "dev/img/kill-em-all.jpg",
			favorite : false,
			favoriteToggle : function(){
				this.favorite = !this.favorite;
			}
		},
		{
			name : "And Justice For All",
			year : 1988,
			artist : "Metallica",
			cover : "dev/img/and-justice-for-all.jpg",
			favorite : false,
			favoriteToggle : function(){
				this.favorite = !this.favorite;
			}
		}
	];

}]);