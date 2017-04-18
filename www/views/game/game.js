app.controller('gameCtrl',function($scope,$http,$stateParams){
	
	$scope.params = $stateParams
	$scope.getHeight = function(){
		return parseInt(window.innerHeight - 30) + 'px'
	}
	$scope.goBack = function(){
		window.history.back()
	}
	
	$http.get('/api/api/RoomApi/live/' + $scope.params.cate_id)
	.then(function(res){
//		console.log('开始获取数据')
		console.log(res)
		$scope.gameu = res.data
	}).catch(function(err){
		console.log('获取数据失败')
	})
})




