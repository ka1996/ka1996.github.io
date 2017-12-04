function changeLight(){
    var x = document.getElementById("trafficRed");
    var y = document.getElementById("trafficGreen");
    var car1 = document.getElementById("car1");
    var car2 = document.getElementById("car2");
    var car1Winner = document.getElementById("car1Winner");
    var car2Winner = document.getElementById("car2Winner");
    var winnerText = document.getElementById("winnerText");
    var distance1 = 0;
    var distance2 = 0;
    var total1 = 20;
    var total2 = 20;

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';

    var pace1 = setInterval(frame, 10);
    var pace2 = setInterval(frame, 10);
    function frame() {
      if (total1 >= 1200) {
        clearInterval (pace1);
        clearInterval (pace2);
        alert("Congratulations top car won!");
        y.style.visibility = 'hidden';
        x.style.visibility = 'visible';
        car1Winner.style.visibility = 'visible';
        winnerText.style.visibility = 'visible';
      } else {
        distance1 = Math.floor((Math.random() * 10) + 1 );
        total1 += distance1;
        car1.style.left = total1 + 'px'; 
      }
      if (total2 >= 1200){
        clearInterval (pace1);
        clearInterval (pace2);
        alert("Congratulations bottom car won!");
        y.style.visibility = 'hidden';
        x.style.visibility = 'visible'; 
        car2Winner.style.visibility = 'visible';
        winnerText.style.visibility = 'visible';
      } 
      else{
      distance2 = Math.floor((Math.random() * 10) + 1 );
      total2 += distance2;
      car2.style.left = total2 + 'px'; 
      }
      if (total1 >= 1200 || total2 >= 1200)
      {
        car2.style.left = 20 + 'px';
        car1.style.left = 20 + 'px'; 
      }
    }
}

