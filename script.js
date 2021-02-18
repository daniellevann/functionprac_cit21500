var wrapper = document.querySelector(".wrapper");
var resultEle1 = document.querySelector(".result1");
var resultEle2 = document.querySelector(".result2");
var resultEle3 = document.querySelector(".result3");
var resultEle4 = document.querySelector(".result4");
var submitEle = document.querySelector(".submit");

var mpg1;
var total = 0;
var milesPerYear;
var priceOfGas;

function totalCost(milesPerYear, priceOfGas, mpg1){
  var total = priceOfGas * (milesPerYear / mpg1)
  return total;
}

function collectData(){
  var milesPerYear = Number(prompt("About how many miles a year do you drive?"));
  var priceOfGas = Number(prompt("What is the current price of gas in your area?"));
  
  resultEle1.innerHTML =
  "To drive a car with a mpg rating of 12 for " +
  milesPerYear +
  " miles at $" +
  priceOfGas +
  " per gallon it would cost $" +
  totalCost(milesPerYear, priceOfGas, 12);

resultEle2.innerHTML =
  "To drive a car with a mpg rating of 17 for " +
  milesPerYear +
  " miles at $" +
  priceOfGas +
  " per gallon it would cost $" +
  totalCost(milesPerYear, priceOfGas, 17);

resultEle3.innerHTML =
  "To drive a car with a mpg rating of 26 for " +
  milesPerYear +
  " miles at $" +
  priceOfGas +
  " per gallon it would cost $" +
  totalCost(milesPerYear, priceOfGas, 26);

resultEle4.innerHTML =
  "To drive a car with a mpg rating of 29 for " +
  milesPerYear +
  " miles at $" +
  priceOfGas +
  " per gallon it would cost $" +
  totalCost(milesPerYear, priceOfGas, 29);
  
}
  

collectData();
submitEle.addEventListener("click", function(){
collectData();
});