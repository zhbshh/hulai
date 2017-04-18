app.controller('worksCtrl',function($scope,$http,$stateParams,Spec){
	$scope.params = $stateParams
	$scope.goback = function(){
		return window.history.back()
	}
	$scope.pictures = Spec
	$http.get('http://www.hoolay.cn/api/search',{
		params:{
			is_scroll:'true',
			size:24,
			mode:'art'
			
		}
	}).then(function(res){
		console.log('开始获取数据...')
//		console.log(res.data.hits)
		$scope.infos = res.data.hits
	}).catch(function(err){
		console.log('获取数据失败')
	})
	
	$scope.getHeight = function(){
		return parseInt(window.innerHeight) + 'px'
	}
})