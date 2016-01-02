$( document ).ready(function() {
  // Handler for .ready() called.
  fadeLoadScreen(3000); // Hide Load-Screen// Use in production
  updateTime();
  updateWallpaper();

  $("#main-container").hide();
  $("#d-app-2").hide();
  $("#d-app-3").hide();
  $("#d-app-4").hide();
  $("#d-app-5").hide();
  $("#d-app-6").hide();
  ///// FOR DEBUGGIN ONLY
  ///
  //fadeLoadScreen(1);
  //fadeLoginScreen();
  
  ///
  /// END OF DEBUG ||||| GET RID OF THESE IN PRODUCTION
  $(".desktop-icon").draggable(); // set up desktop Icon
  $("#main-container").draggable();// set up desktop app(calculator)
  // About Me
  $("#d-app-2").draggable().resizable();
  $("#d-app-3").draggable().resizable();
  $("#d-app-4").draggable().resizable();
  $("#d-app-5").draggable().resizable();
  $("#d-app-6").draggable().resizable();



  //CALC
  $("#calc").dblclick(function(){ //Open Calc on dblclick
  	$("#main-container").show();
  });
  $("#main-container #d-close-calc").click(function(){ //Close calc on close button
  	$("#main-container").hide();
  });

  // ABOUT ME
  $("#i-abtme").click(function(){ //Close calc on close button
    $("#d-app-2").show();
  });
  $("#d-close-abtme").click(function(){ //Close calc on close button
    $("#d-app-2").hide();
  });
  // RESUME CV
  $("#i-resume").click(function(){ //Close calc on close button
    $("#d-app-3").show();
  });
  $("#d-close-resume").click(function(){ //Close calc on close button
    $("#d-app-3").hide();
  });
  // Projects
  $("#i-projects").click(function(){ //Close calc on close button
    $("#d-app-4").show();
  });
  $("#d-close-projects").click(function(){ //Close calc on close button
    $("#d-app-4").hide();
  });
  // SKILLS
  $("#i-skills").click(function(){ //Close calc on close button
    $("#d-app-5").show();
  });
  $("#d-close-skills").click(function(){ //Close calc on close button
    $("#d-app-5").hide();
  });
  // MUSIC
  // TO -DO
  //
  //
  //
  //
  // END OF MUSIC
  
  





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