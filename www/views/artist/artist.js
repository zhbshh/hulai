app.controller('artCtrl',function($scope,$http,$stateParams){
	$scope.params = $stateParams
	//https://api.hoolay.cn/v1/users/19505?include_statistics=true
	//https://api.hoolay.cn/v1/users/19505?include_statistics=true
	//http://www.hoolay.cn/wx/u/19505?ref=home
	
	$http.get('/artist/wx/u/'+$scope.params.id,{
		params:{
			ref:'home'
		}
	})
	.then(function(res){
		console.log('开始获取数据')
		console.log(res.data)
	}).catch(function(err){
		console.log('获取数据失败')
	})
})