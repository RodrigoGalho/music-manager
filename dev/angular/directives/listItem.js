app.directive('listAlbumItem', function(){
	return{
		restrict : 'E',
		scope : {
			info : '=', 
		},
		templateUrl : 'dev/angular/directives/listItem.html'
	}
});