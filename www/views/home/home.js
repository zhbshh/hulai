app.controller('homeCtrl', function($scope, $http) {
	
	var navHeight = document.querySelector('ion-tab').offsetHeight
	$scope.getHeight = function(){
		return parseInt(window.innerHeight - navHeight) + 'px'
	}
	
	$http.get('http://www.hoolay.cn/api/mobile/v2/home?withcache')
	.then(function(res) {
//		console.log(res.data.slidesData)
		$scope.infos = res.data
	}).catch(function(err) {
		console.log('获取数据失败')
	})
})




