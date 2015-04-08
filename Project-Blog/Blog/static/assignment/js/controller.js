app.controller('MainCtrl',function($scope,$filter,$http,MainService){
				$scope.dataList = [];
				$scope.dataDetailList = [];
				$scope.showList = [];
				$scope.pages = [];
				$scope.selectedList = [];
				$scope.currentPage = 1;
				$scope.perpage = 5;
				$scope.searchText = "";
				$scope.textFilter = "";
				$scope.currentSelected = "";
				$scope.isRemoved = false;
				var typing;
				
				
				$scope.init = function(){
					//$scope.dataList = MainService.getData();
					//$scope.dataDetailList = MainService.getDataDetail();
					//$scope.dataList = MainService.getResultData();
					//$scope.dataDetailList = MainService.getResultDataDetail();
					$http.get('static/assignment/data/selected-results.txt').success(function(data, status, headers, config) {
						$scope.dataList = data.list;
						$scope.pages = countPage($scope.dataList.length,$scope.perpage);
						$scope.showList = getShowList($scope.currentPage,$scope.perpage);
					});
					$http.get('static/assignment/data/results.txt').success(function(data, status, headers, config) {
						$scope.dataDetailList = data.rics;
					});
				};
				
				$scope.isFirstPage = function(){
					return ($scope.currentPage == 1);
				};
				
				$scope.isLastPage = function(){
					return ($scope.currentPage == $scope.pages.length);
				};
				
				$scope.activePage = function(page){
					if(page == $scope.currentPage)
						return 'active';
				}
				
				$scope.hilightText = function(val){
					hideErrMsg();
					$('.showList').unhighlight();
					$('.showList').highlight($scope.searchText);
					filterDetailList();
				};
				
				
				$scope.changePage = function(page){
					$scope.currentPage = page;
					$scope.showList = getShowList($scope.currentPage,$scope.perpage);
				};
				
				$scope.selectedDetail = function(detail){
					if($scope.isRemoved == true)
						$scope.isRemoved = false;
					var obj = {
						"ric": detail.ric,
						"title": detail.title
					}
					if(isAlreadyExist(obj) == true){
						$scope.currentSelected = obj['title'];
						showErrMsg();
					} else {
						$scope.selectedList.push(obj);
						$scope.dataList.unshift(obj);
						$scope.showList = getShowList($scope.currentPage,$scope.perpage);
						$scope.pages = countPage($scope.dataList.length,$scope.perpage);
					}
					$scope.searchText = "";
					$scope.textFilter = "";
				}
				
				$scope.removeData = function(data){
					var index = getIndexOfItem(data);
					if(index != -1){
						$scope.dataList.splice(index,1)
						$scope.pages = countPage($scope.dataList.length,$scope.perpage);
						$scope.showList = getShowList($scope.currentPage,$scope.perpage);
						if($scope.showList.length == 0){
							$scope.currentPage = $scope.currentPage-1;
							$scope.showList = getShowList($scope.currentPage,$scope.perpage);
						}
					}
					if($scope.dataList.length == 0)
						$scope.removeAllData();
				};
				
				$scope.removeAllData = function(){
					$scope.showList = [];
					$scope.dataList = [];
					$scope.selectedList = [];
					$scope.isRemoved = true;
				};
				
				function filterDetailList(){
					if(angular.isDefined(typing)){
						clearTimeout(typing);
						typing = undefined;
						typing = setTimeout(function(){
							$scope.textFilter = $scope.searchText;
							$scope.$apply();
							$('.showList').highlight($scope.searchText);
							checkDetailList();
						},1000);
					} else {
						typing = setTimeout(function(){
							$scope.textFilter = $scope.searchText;
							$scope.$apply();
							$('.showList').highlight($scope.searchText);
							checkDetailList();
						},1000);
					}
				}
				
				function hideErrMsg(){
					if($('.errorMsgBox').css('display') != 'none')
						$('.errorMsgBox').slideUp( "slow" );
				}
				
				function showErrMsg(){
					$('.errorMsgBox').slideDown( "slow" );
				}
				
				function checkDetailList(){
					if($('#detailList').children().length <= 0)
						$('.searchBox > input[type="text"]').css('border','3px solid red');
					else
						$('.searchBox > input[type="text"]').css('border','1px solid #ccc');
				}
				
				function getIndexOfItem(item){
					for (var i = 0; i < $scope.dataList.length; i++) {
						if ($scope.dataList[i].title == item.title && $scope.dataList[i].ric == item.ric) {
							return i;
						}
					}
					return -1;
				}
				
				function isAlreadyExist(obj){
					for (var i = 0; i < $scope.selectedList.length; i++) {
						if ($scope.selectedList[i].title == obj.title && $scope.selectedList[i].ric == obj.ric) {
							return true;
						}
					}
					return false;
				}
				
				function getShowList(currentPage,perpage){
					var list = [];
					var start = (perpage*currentPage)-perpage;
					var limit = perpage*currentPage;
					for(var i=start;i < limit;i++){
						if($scope.dataList.length > i)
							list.push($scope.dataList[i]);
					}
					return list;
				}
				
				function countPage(dataCount,showPerpage){
					var pageCount = Math.ceil(dataCount/showPerpage);
					var pageList = [];
					for(var i=0;i < pageCount;i++){
						pageList.push(i+1);
					};
					return pageList;
				}
				
			});