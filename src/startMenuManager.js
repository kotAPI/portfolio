startMenuToggler = 0;

$("#start-menu").hide();

var toggleStartMenu = function(){
	if(startMenuToggler ===0){
		$("#start-menu").show();
		startMenuToggler =1;
	}
	else if(startMenuToggler===1){
		$("#start-menu").hide();
		startMenuToggler=0;
	}
}