$( document ).ready(function() {
  // Handler for .ready() called.
  //fadeLoadScreen(3000); // Hide Load-Screen// Use in production
  updateTime();
  updateWallpaper();

  $("#main-container").hide();

  ///// FOR DEBUGGIN ONLY
  ///
  fadeLoadScreen(1);
  fadeLoginScreen();
  
  ///
  /// END OF DEBUG ||||| GET RID OF THESE IN PRODUCTION
  $(".desktop-icon").draggable(); // set up desktop Icon
  $("#main-container").draggable();// set up desktop app(calculator)




  $("#calc").dblclick(function(){ //Open Calc on dblclick
  	$("#main-container").show();
  });
  $("#main-container .close-btn").click(function(){ //Close calc on close button
  	$("#main-container").hide();
  });
  	
  


  var toggler = 0;
  var fullscreenToggler =0;
  // Toggle login-user on and off.
  $("#user-login-img").click(function(){
  	if(toggler===1){
	  	toggleLoginTabOff();
	  	toggler = 0;
  	}
	else if(toggler===0){
	  	toggleLoginTabOn();
	  	toggler =1;
	}
  });
  $("#start-button").click(function(){
  	toggleStartMenu();
  });
  $("#icon-container").click(function(){
  	$("#start-menu").hide();
		startMenuToggler=0;
  });
  ///
  /// Login to desktop on submit
  /// 
  
  $("#input-login").submit(function(event){
  	fadeLoginScreen();
  });
 
  $("#fullscreen-controls").click(function(){
  	if(fullscreenToggler === 0){  		
  	 launchIntoFullscreen(document.documentElement);
  	 fullscreenToggler =1;
  	}
  	else if(fullscreenToggler ===1){
  		exitFullscreen();
  		fullscreenToggler = 0;
  	}
  });
  
});


var fadeLoadScreen = function (time) {
	$("#loadscreen").delay( time ).fadeOut("slow");
}

var toggleLoginTabOn = function(){		
  		$("#user-login-box").css("height","200px").css("background","rgba(0,0,0,0.25)");
  		$("#user-login-img").css("top","25%");
  		$("#user-login-name").css("top","25%");
  		$("#user-login-pass").show();  
}

var toggleLoginTabOff = function(){	
  		$("#user-login-box").css("height","60px").css("background","rgba(255,255,255,0.3)");
  		$("#user-login-img").css("top","0%");
  		$("#user-login-name").css("top","0%");
  		$("#user-login-pass").hide();
  
}

var fadeLoginScreen = function(){
	event.preventDefault();
  	$("#login-page").fadeOut(500);
}