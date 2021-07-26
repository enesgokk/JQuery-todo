var i=0;
		$("button").click(function(){
			i++;
			var text=$("input").val()
			if($("input").val()!=""){
				$("ul").append('<li class="'+i+'" ><label><input type="checkbox" class="'+i+'" id="checkbox">'+text+'</label><button id="'+i+'" class="delete btn btn-danger">X</button </li>');
			}	
			$("input").val("");	
		})

		$(document).on("click",".delete", function(){
  			var btnClass=$(this).attr("id")
			
			$("ul").find("."+btnClass).css("display","none");
			$(this).css("display","none");
			
		})
		var checkboxCount=0;
		$( document ).on( "click","label", function(){
			checkboxCount++;
			if(checkboxCount%2!=0){
				$(this).css("text-decoration","line-through");
			}
			else{
				$(this).css("text-decoration","none");
			}
			
		});
  			