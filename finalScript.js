function changeLight(){
    var x = document.getElementById("trafficRed");
    var y = document.getElementById("trafficGreen");
    var car1 = document.getElementById("car1");
    var car2 = document.getElementById("car2");
    var distance1 = 0;
    var distance2 = 0;
    var total1 = 20;
    var total2 = 20;

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';

    var pace1 = setInterval(frame, 10);
    var pace2 = setInterval(frame, 10);
    function frame() {
        console.log(total1);
      if (total1 >= 1000) {
        clearInterval (pace1);
        clearInterval (pace2);
        alert("Congratulations top car won!");
      } else {
        distance1 = Math.floor((Math.random() * 10) + 1 );
        total1 += distance1;
        car1.style.left = total1 + 'px'; 
      }
      console.log(total2);
      if (total2 >= 1000){
        clearInterval (pace1);
        clearInterval (pace2);
        alert("Congratulations bottom car won!");
      } 
      else{
      distance2 = Math.floor((Math.random() * 10) + 1 );
      total2 += distance2;
      car2.style.left = total2 + 'px'; 
      }
    }
}

