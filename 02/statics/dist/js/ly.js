	//ÊµÏÖ×ó²àÌø×ªÒ³ÃæµÄÂ·ÓÉ
	function ppp(num,me){
	
	if(num==1){
	alert("第一号页面");
	$("#mb").append("<div></div>");
	$("#mb div").hide("slow",function(){
	$("#mb").load("one.html");
	}); 
	}
	else if(num==2){
	$("#mb").append("<div></div>");
	$("#mb  div").hide("slow",function(){
	$("#mb").load("two.html");
	}); 
	}
	else if(num==3){
	$("#mb").append("<div></div>");
	$("#mb  div").hide("slow",function(){
	$("#mb").load("index.html");
	}); 
	
	}
	else if(num==4){
	$("#mb").append("<div></div>");
	$("#mb  div").hide("slow",function(){
	$("#mb").load("home.html");
	}); 
	
	}
	else if(num==5){
	$("#mb").append("<div></div>");
	$("#mb  div").hide("slow",function(){
	$("#mb").load("two.html");
	}); 
	
	}
	else if(num==6){
	$("#mb").append("<div></div>");
	$("#mb  div").hide("slow",function(){
	$("#mb").load("two.jsp");
	}); 
	
	}

	
	}