app.controller('tianCtrl',function($scope,$http,$stateParams){
	
	$scope.params = $stateParams
	$http.get('http://share.tianyancha.com/hotnews/'+$scope.params.id)
	.then(function(res){
		console.log('开始请求数据')
		console.log(res.data)
		$scope.every = res.data.slice(243,258)
//		$scope.asd = $scope.every.slice(0,10)
	}).catch(function(err){
		console.log('获取数据失败')
	})
	
	$scope.getHeight = function(){
		return parseInt(window.innerHeight) + 'px'
	}
	
})