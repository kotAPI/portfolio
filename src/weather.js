var latitude;
var longitude;
$(document).ready(function(){
  
   window.navigator.geolocation.getCurrentPosition(function(pos)
    {      
      latitude=  pos.coords.latitude; 
      longitude = pos.coords.longitude;  
     console.log(latitude+" "+longitude);
    });
   

  $("#weather-container").click(function(){    
    $("#weather-container").css("z-index","0");
     $.getJSON( "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=36292b490b9d31685bd36b7de9afe625", function( data ) {
        
    temperature = data.main.temp;
    description = data.weather[0].description;
    city = data.name;
    humidity = data.main.humidity;  
    weatherId = data.weather[0].icon;

      
    celcius  = temperature-273.15;
    celcius = celcius.toFixed(2);
    farenheit = parseInt((temperature-273.15)*1.8000 + 32.00);
    
    if(celcius<0){
      $("#weather-container > #weather-icon").html("5");
    }
    else if(celcius>0 && celcius<20){
      $("#weather-container > #weather-icon").html("3")
    }
    else if(celcius>20 && celcius<30){
      $("#weather-container > #weather-icon").html("2")
    }
    else if(celcius >30 && celcius < 40 ){
      $("#weather-container > #weather-icon").html("7")
    }
    else if(celcius>40){
      $("#weather-container > #weather-icon").html("1")
    }
    else{
      $("#weather-container > #weather-icon").html("")
    }

    $("#weather-container > #city").html(city+" ");
     $("#weather-container > #weather-temperature").html(" "+celcius +" &deg;");
    console.log(city);

  });
  })
  

})




   

  
  
