
//function validateForm(){
//   var x = document.forms["myForm"]["fname"].value;
 //   if (x ==""){
  //      alert("Name must be filled out");
  //      return false;
  //  }
//}
var date = new Date ();
var n = date.toDateString();
var time = date.toLocaleTimeString();
    //output using InnerHTML
document.getElementById("time").innerHTML = n + 
     ' ' + time;
