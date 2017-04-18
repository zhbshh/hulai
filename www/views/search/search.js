app.controller('searchCtrl',function($scope,$http){
	
	$scope.getHeight= function(){
		return parseInt(window.innerHeight)+'px'
	}
	
	
//	$http.get('http://api.tianyancha.com/services/v3/hotnews/apphotword?pageSize=8&source=web')
	$http.get('http://api.tianyancha.com/services/v3/hotnews/apphotword',{
		params:{
			pageSize:8,
			source:'web'
		}
	})
	.then(function(res){
//		console.log('开始获取数据')
//		console.log(res.data)
		$scope.infos = res.data
	}).catch(function(err){
//		console.log('获取数据失败')
	})
	
	$http.get('/tianyanapi/newest/56.json')
	.then(function(res){
//		console.log('开始获取数据')
//		console.log(res.data)
		$scope.news = res.data
	}).catch(function(err){
		console.log('获取数据失败')
	})
})
