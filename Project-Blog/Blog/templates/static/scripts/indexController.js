app.controller('indexCtrl', ['$scope', function($scope){
	$scope.recentBlog = null;
	$scope.blogList = [];
	$scope.portfolios = [];
	
	$scope.init = function(){
		$scope.recentList = [
			{
				Name:"ไอสไตน์ กล่าวไว้ !",
				Content:"สวัสดีค่ะน้องๆ ชาว Dek-D.com... ไอน์สไตน์เคยบอกไว้ว่าจินตนาการสำคัญกว่าความรู้ แต่ในความเป็นจริง ถ้ามีทั้งจินตนาการและความรู้ไปพร้อมๆ กันก็จะเพอร์เฟคที่สุด เหมือนอย่างวันนี้ที่พี่มิ้นท์จะมาแนะนำเว็บไซต์ที่ให้ความรู้ครอบจักรวาล... ครอบจักรวาลยังไง เดี๋ยวตามมาดูค่ะ",
				Img:"static/imgs/a.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/b.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/c.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/d.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/e.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/f.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/g.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/h.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/i.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/j.jpg"
			}
		];
		
		$scope.portfolios = [
			{
				Name:"noomerZx Blog",
				Content:"สวัสดีค่ะน้องๆ ชาว Dek-D.com... ไอน์สไตน์เคยบอกไว้ว่าจินตนาการสำคัญกว่าความรู้ แต่ในความเป็นจริง ถ้ามีทั้งจินตนาการและความรู้ไปพร้อมๆ กันก็จะเพอร์เฟคที่สุด เหมือนอย่างวันนี้ที่พี่มิ้นท์จะมาแนะนำเว็บไซต์ที่ให้ความรู้ครอบจักรวาล... ครอบจักรวาลยังไง เดี๋ยวตามมาดูค่ะ",
				Img:"static/imgs/k.jpg"
			},
			{
				Name:"Shooting Simulation System",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/l.jpg"
			},
			{
				Name:"Bocha Shop",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"static/imgs/m.jpg"
			}
		];
	};
}]);