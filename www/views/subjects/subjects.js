app.controller('subjectsCtrl', function($scope, $http, $stateParams) {
	window._bd_share_config = {
		"common": {
			"bdSnsKey": {},
			"bdText": "",
			"bdMini": "1",
			"bdMiniList": false,
			"bdPic": "",
			"bdStyle": "2",
			"bdSize": "24"
		},
		"share": {},
		"image": {
			"viewList": ["qzone", "sqq", "tsina", "weixin", "douban"],
			"viewText": "分享到：",
			"viewSize": "24"
		},
		"selectShare": {
			"bdContainerClass": null,
			"bdSelectMiniList": ["qzone", "sqq", "tsina", "weixin", "douban"]
		}
	};
	with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
	
	
	$scope.getHeight = function() {
		return parseInt(window.innerHeight - 60) + 'px'
	}
	$scope.goback = function(){
		return window.history.back()
	}
	$http.get('http://www.hoolay.cn/api/posts/item/'+$stateParams.id)
	.then(function(res) {
		console.log('开始获取数据')
		//		console.log(res.data)
//		console.log(res.data.id)
		$scope.subjectsinfo = res.data
		$scope.picO = $scope.subjectsinfo.cover
//			$scope.picF = $scope.subjectsinfo.configs.slice(17, 66)
//			$scope.picS = $scope.subjectsinfo.configs.slice(73, 122)
//			$scope.picT = $scope.subjectsinfo.configs.slice(129, 178)
		$scope.bodyT = $scope.subjectsinfo.body.replace(/<.*?>/ig, "")

	}).catch(function(err) {
		console.log('获取数据失败')
	})
	
	
	//http://www.hoolay.cn/api/comments?limit=15&include_user=true&commentable_type=post&commentable_id=13623
	$http.get('http://www.hoolay.cn/api/comments',{
		params:{
			limit:15,
			include_user:'true',
			commentable_type:'post',
			commentable_id:$stateParams.id
		}
	})
	.then(function(res){
		console.log('开始获取数据')
		$scope.comments = res.data
	}).catch(function(err){
		console.log('获取数据失败')
	})
	
})