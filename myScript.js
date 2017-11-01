//JavaScript source code
//collecting three numbers using the prompt
var number1 = prompt("Please enter a number");
var number2 = prompt("Please enter another number");
var number3 = prompt("Please enter a third number");

//using the Math.max function to determine which of the three numbers is the largest
var largest = Math.max(number1, number2, number3);

//output using the alert popup
alert(largest);

//output using InnerHTML
document.getElementById("output").innerHTML = largest;