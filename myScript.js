
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

function validateForm(myForm){
    var x=document.forms["myForm"]["fname"].value;
        if (x==null || x=="")
        {
          alert("First name must be entered");
          return false;
        }
        
    var y=document.forms["myForm"]["lname"].value;
        {
        if (y==null || y=="")
          alert("Last name must be entered");
          return false;
        }
    var z=document.forms["myForm"]["email"].value;
        {
        if (z==null || z=="")
          alert("Email address must be entered");
          return false;
        }
    var k=document.forms["myForm"]["comment"].value;
        {
        if (k==null || k=="")
          alert("Comment in the box below");
          return false;
        }
        }
    console.log(c);
        