
//function validateForm(){
//   var x = document.forms["myForm"]["fname"].value;
 //   if (x ==""){
  //      alert("Name must be filled out");
  //      return false;
  //  }
//}

document.getElementById("date").innerHTML = new Date();

function validateForm(myForm){
    var x=document.forms["contactUs"]["fname"].value;
        if (!isNaN(x) || x=="")
        {
          alert("First name must be entered");
          return false;
        }
        
    var y=document.forms["contactUs"]["lname"].value;
        {
        if (!isNaN(y) || y=="")
          alert("Last name must be entered");
          return false;
        }
    var z=document.forms["contactUs"]["email"].value;
        {
        if (!isNaN(z) || z=="")
          alert("Email address must be entered");
          return false;
        }
    var k=document.forms["contactUs"]["question"].value;
        {
        if (!isNaN(k) || k=="")
          alert("Comment in the box below");
          return false;
        }
    }
        