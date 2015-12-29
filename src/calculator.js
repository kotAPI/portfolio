var numberDisplay;
var floating=1;
var number1=0;
var number2=0;
var calculating =0 ;
var result =0;
var multiply=0;
var add = 0;
var subtract =0;
var divide=0;
// I TRIED SO HARD

$("#point").click(function(){
  if(floating==1){
    numberDisplay = numberDisplay.concat(".");
    $("#display").html(numberDisplay);
    floating=0;
  }
})
  numberDisplay="";
$(".calc-button").click(function() {
  console.log(number1+ " "+number2);
   if(numberDisplay == 0){
    numberDisplay ="";
  } 
  if(numberDisplay.length<10 ){
    var status = $(this).attr('id');    
    numberDisplay = numberDisplay.concat(status);
    $("#display").html(numberDisplay);
  }
  if(calculating==0){
   number1=parseInt(numberDisplay);// Convert string to number   
  }
});

$("#clear").click(function(){  
  
   numberDisplay = 0;
   $("#display").html(numberDisplay);  
  divide=0;
  multiply=0;
  add=0;
  subtract=0;
  number1=0;
  number2=0;
  numberDisplay="";
  result=0;
  calculating=0;
  floating=1;
})
$(".calc-button-operator").click(function(){    
  numberDisplay="";
  var status = $(this).attr('id');
  console.log(status);
  if(status=="plus"){
    add=1;
    calculating = 1
  }
  if(status=="minus"){
    subtract=1;
    calculating = 1
  }
  if(status=="divide"){
   divide=1;
    calculating = 1
  }
  if(status=="multiply"){
   multiply=1;
   calculating = 1
  }  
  
});

$("#equate").click(function(){
  console.log(number1+ "before equating"+number2);
  
  if(calculating == 1){
    number2=parseInt(numberDisplay);// Convert string to number
   numberDisplay = 0;
  }  
  
  if(divide==1){
    result = number1/number2;
  }
  else if(add==1){
    result = number1+number2;
  }
  else if(subtract==1){
    result = number1-number2;
  }
  else if(multiply==1){
    result = number1*number2;
  }
  else {
    result = number1;
  } 
  
   $("#display").html(result);  
  
  divide=0;
  multiply=0;
  add=0;
  subtract=0;
  number1=0;
  number2=0;
  numberDisplay="";
  result=0;
  calculating=0;
  floating=1;
})
