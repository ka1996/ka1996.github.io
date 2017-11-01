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

function gatherWords(){
    //this array holds all of the input words
    var words = [];
    //this loop is designed to take in 5 words 
    //from the user and store them in the array
    var wordCount = 0;
    while(wordCount < 5)
    {
        words.push(prompt("please enter a word"));
        wordCount++;
    }

}
function printWords(wordList){
    //a counter for the loop
    var counter = 0;

    //This loop goes through the array and prints out each item
    while(count < 5)
    {
        document.getElementById("result").innerHTML += wordList[count]
        counter++;
    }
    //call the printWords function to output the array
    printWords(words);
}