app.directive('listItem', function(){
	return {
		restrict : 'E',
		scope : {
			info : '='
		},
		templateUrl : 'dev/angular/directives/dadosAlbum.html'
	}
});