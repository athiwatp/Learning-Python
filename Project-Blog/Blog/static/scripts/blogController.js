app.controller('blogCtrl', ['$scope', function($scope){
	$scope.blogs = [];
	$scope.title = [];
	
	$scope.getTitle = function(index){
		return $scope.title[index];
	};
	
	$scope.init = function(){
		$scope.title = ['Book','Movie','Review','Tech','Travel']
	
		$scope.blogs = [
			{
				Name:"ไอสไตน์ กล่าวไว้ !",
				Content:"สวัสดีค่ะน้องๆ ชาว Dek-D.com... ไอน์สไตน์เคยบอกไว้ว่าจินตนาการสำคัญกว่าความรู้ แต่ในความเป็นจริง ถ้ามีทั้งจินตนาการและความรู้ไปพร้อมๆ กันก็จะเพอร์เฟคที่สุด เหมือนอย่างวันนี้ที่พี่มิ้นท์จะมาแนะนำเว็บไซต์ที่ให้ความรู้ครอบจักรวาล... ครอบจักรวาลยังไง เดี๋ยวตามมาดูค่ะ",
				Img:"static/imgs/a.jpg",
				Type:'tech'
			},
			{
				Name:"TitleBook",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/b.jpg",
				Type:'book'
			},
			{
				Name:"TitleTravel",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/c.jpg",
				Type:'travel'
			},
			{
				Name:"TitleReview",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/d.jpg",
				Type:'review'
			},
			{
				Name:"TitleMovie",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/e.jpg",
				Type:'movie'
			},
			{
				Name:"TitleMovie",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/f.jpg",
				Type:'movie'
			},
			{
				Name:"TitleTech",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/g.jpg",
				Type:'tech'
			},
			{
				Name:"TitleBook",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/h.jpg",
				Type:'book'
			},
			{
				Name:"TitleTech",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/i.jpg",
				Type:'tech'
			},
			{
				Name:"TitleMovie",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/j.jpg",
				Type:'movie'
			}
		];
	};
}]);