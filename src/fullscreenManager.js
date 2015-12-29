

function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }

   $("#fullscreen-controls").css("background-image","url(icons/fexit.png)");
   $("#fullscreen-controls").css("background-size","32px 32px");

}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  $('#fullscreen-controls').css('background-image',"url(icons/fenter.png");
  $("#fullscreen-controls").css("background-size","32px 32px");
}



// the whole page