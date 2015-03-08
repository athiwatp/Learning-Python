app.controller('indexCtrl', ['$scope', function($scope){
	$scope.recentBlog = null;
	$scope.blogList = [];
	$scope.portfolios = [];
	
	$scope.init = function(){
		$scope.blogList = [
			{
				Name:"ไอสไตน์ กล่าวไว้ !",
				Content:"สวัสดีค่ะน้องๆ ชาว Dek-D.com... ไอน์สไตน์เคยบอกไว้ว่าจินตนาการสำคัญกว่าความรู้ แต่ในความเป็นจริง ถ้ามีทั้งจินตนาการและความรู้ไปพร้อมๆ กันก็จะเพอร์เฟคที่สุด เหมือนอย่างวันนี้ที่พี่มิ้นท์จะมาแนะนำเว็บไซต์ที่ให้ความรู้ครอบจักรวาล... ครอบจักรวาลยังไง เดี๋ยวตามมาดูค่ะ",
				Img:"imgs/a.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"imgs/b.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"imgs/c.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"imgs/d.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"imgs/e.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"imgs/f.jpg"
			}
		];
		
		$scope.portfolios = [
			{
				Name:"ไอสไตน์ กล่าวไว้ !",
				Content:"สวัสดีค่ะน้องๆ ชาว Dek-D.com... ไอน์สไตน์เคยบอกไว้ว่าจินตนาการสำคัญกว่าความรู้ แต่ในความเป็นจริง ถ้ามีทั้งจินตนาการและความรู้ไปพร้อมๆ กันก็จะเพอร์เฟคที่สุด เหมือนอย่างวันนี้ที่พี่มิ้นท์จะมาแนะนำเว็บไซต์ที่ให้ความรู้ครอบจักรวาล... ครอบจักรวาลยังไง เดี๋ยวตามมาดูค่ะ",
				Img:"imgs/g.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"imgs/h.jpg"
			},
			{
				Name:"Title",
				Content:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
				Img:"imgs/i.jpg"
			}
		];
	};
}]);