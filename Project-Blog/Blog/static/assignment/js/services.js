app.factory('MainService',function($http,$q){
				var factory = {};
				
				factory.getResultData = function(){
					var deferred = $q.defer();
					$http.get('static/assignment/data/results.txt').success(function(data, status, headers, config) {
						deferred.resolve(data.rics);
					}).error(function(data, status, headers, config) {
						deferred.reject('error');
					});
					
					return deferred.promise;
				};
				
				factory.getResultDataDetail = function(){
					var deferred = $q.defer();
					$http.get('static/assignment/data/selected-results.txt').success(function(data, status, headers, config) {
						deferred.resolve(data.list);
					}).error(function(data, status, headers, config) {
						deferred.reject('error');
					});
					
					return deferred.promise;
				};
				
				factory.getDataDetail = function(){
					var data = [
						{
							"ric": "IBM.N",
							"subtitle": "Ordinary Share - New York Stock Exchange - IBM",
							"title": "International Business Machines Corp",
							"type": "EQ"
						},
						{
							"ric": "A",
							"subtitle": "Ordinary Share - NYSE Consolidated - A",
							"title": "Agilent Technologies Inc",
							"type": "EQ"
						},
						{
							"ric": "GOOGL.O",
							"subtitle": "Ordinary Share - NASDAQ Global Select Consolidated - GOOGL",
							"title": "Google Inc",
							"type": "EQ"
						},
						{
							"ric": "AAPL.O",
							"subtitle": "Ordinary Share - NASDAQ Global Select Consolidated - AAPL",
							"title": "Apple Inc",
							"type": "EQ"
						},
						{
							"ric": "0#CL:",
							"subtitle": "Crude Oil - Commodity Future - New York Mercantile Exchange (NYMEX)",
							"title": "NYMEX Light Sweet Crude Oil (WTI) Composite Energy Future Chain Contracts",
							"type": "COM"
						},
						{
							"ric": "0#WTI:",
							"subtitle": "Commodity Future - ROSARIO FUTURES EXCHANGE",
							"title": "ROFEX WTI Light Sweet Crude Oil Energy Future Chain Contract",
							"type": "COM"
						},
						{
							"ric": "THB=",
							"subtitle": "THOMSON REUTERS",
							"title": "US Dollar/Thai Baht FX Spot Rate",
							"type": "FX"
						},
						{
							"ric": "AUD=",
							"subtitle": "THOMSON REUTERS",
							"title": "Australian Dollar/US Dollar FX Spot Rate",
							"type": "FX"
						},
						{
							"ric": ".SPX",
							"subtitle": "US - Equity Index - MXP",
							"title": "S&P 500 Index",
							"type": "INDX"
						},
						{
							"ric": "0#USBMK=",
							"subtitle": "US BMK YC - THOMSON REUTERS",
							"title": "United States Government Benchmark Yield Curve",
							"type": "BMK"
						}
					];
					return data;
				};
				
				factory.getData = function(){
					var data =  [
						{
							"ric": "005930.KS",
							"title": "Samsung Electronics Co Ltd"
						},
						{
							"ric": "601857.SS",
							"title": "PetroChina Co Ltd"
						},
						{
							"ric": "7203.T",
							"title": "Toyota Motor Corp"
						},
						{
							"ric": "BHP.AX",
							"title": "BHP Billiton Ltd"
						},
						{
							"ric": "SIEGn.DE",
							"title": "Siemens AG"
						},
						{
							"ric": "TRI.TO",
							"title": "Thomson Reuters Corp"
						}
					];
					return data;
				};
				
				return factory;
			});