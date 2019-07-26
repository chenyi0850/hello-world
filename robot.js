	
	$(document).ready(function(){
		$("button").click(function(){
			var str=$("textarea").val();
			$("ul").append("<li class='me'>"+str+"</li>");
			var data=JSON.stringify({
				"reqType":0,
				"perception": {
					"inputText": {
						"text": str
					},	
				},
				"userInfo": {
					"apiKey": "93113d61b66548c7b7dd3e5421192cb4",
					"userId": "11111"
				}
				});
			console.log(str);
			$.post("http://openapi.tuling123.com/openapi/api/v2",data,
			function(data,status){
				var reply=JSON.parse(data);
				console.log(reply.results[0].values.text);
				$("ul").append("<li class='robot'>"+reply.results[0].values.text+"</li>");
			}
			);
		}
		);
	}
	);