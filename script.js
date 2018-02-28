$(document).ready(function(){

	function attachContactHandlers(){
		$(".contactCard").off("click").on("click", function(event){
			var temp = $(this).attr("contentName");
			$(this).attr("contentName", $(this).attr("contentAlt"));
			$(this).attr("contentAlt", temp);
			$(this).html($(this).attr("contentName"));
		});
	}

	attachContactHandlers();

	$("form").submit(function(){
		if($(".firstName").val() == "" ||
			$(".lastName").val() == "" ||
			$(".description").val() == ""){
			alert("Please completely fill out the form before submitting! :)");
		}
		else{
			var fname = $(".firstName").val();
			var lname = $(".lastName").val();
			var descript = $(".description").val();
			$(".firstName").val("");
			$(".lastName").val("");
			$(".description").val("");
			$(".cardArea").append("<div class = 'contactCard' contentName = '<h2>" + fname + " " + lname + 
								  "</h2><p>Click for description!</p>' contentAlt = '<p>" + descript + "</p><p>Click for name info</p>'>" + 
								  "<h2>" + fname + " " + lname + "</h2><p>Click for description</p></div>");
			attachContactHandlers();
		}
		return false;
	});
});