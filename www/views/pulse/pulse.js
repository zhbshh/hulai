app.controller('pulseCtrl',function($scope,$http,$stateParams){
	
	$scope.getHeight = function(){
		return parseInt(window.innerHeight - 70) + 'px'
	}
	
	
	$http.get('/api/api/RoomApi/game')
	.then(function(res){
		console.log('开始获取数据')
//		console.log(res)
		$scope.gameInfo = res.data.data
	}).catch(function(err){
		console.log('获取数据失败')
	})
})



