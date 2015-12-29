var wallpapers = [
"wallpaper-1.jpg",
"wallpaper-2.jpg",
"wallpaper-3.jpg",
"wallpaper-4.jpg",
"wallpaper-5.jpg"
]

function updateWallpaper(){
	var counter = 1;
	window.setInterval(function(){
  /// call your function here
  
    $('#desktop').css('background-image',"url(image/"+wallpapers[counter]+")");
    counter +=1;
    if(counter>=wallpapers.length){
    	counter=0;
    }

	}, 10000);
}
