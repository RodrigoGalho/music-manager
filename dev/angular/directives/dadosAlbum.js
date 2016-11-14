app.directive('albumItem', function(){
	return {
		restrict : 'E',
		scope : {
			info : '='
		},
		templateUrl : 'dev/angular/directives/dadosAlbum.html'
	}
});