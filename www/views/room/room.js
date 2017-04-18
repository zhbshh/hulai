app.controller('roomCtrl',function($scope,$http,$stateParams){
	$scope.params = $stateParams
	$http.get('/api/api/RoomApi/room/'+$scope.params.roomid)
	.then(function(res){
		console.log('开始获取数据')
		$scope.roomInfo = res.data.data
	}).catch(function(err){
		console.log('获取数据失败')
	})
})