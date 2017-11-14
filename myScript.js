
//function validateForm(){
//   var x = document.forms["myForm"]["fname"].value;
 //   if (x ==""){
  //      alert("Name must be filled out");
  //      return false;
  //  }
//}

function validateForm(contactUs){
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
        
document.getElementById("date").innerHTML = new Date();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}