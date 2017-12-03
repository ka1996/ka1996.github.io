function changeLight() {
    var x = document.getElementById("trafficRed");
    var y = document.getElementById("trafficGreen");
    var distance1 = 0;
    var distance2 = 0;
    if (x.style.visibility === "visible") 
    {
        x.style.visibility = "hidden";
    } 
    if (y.style.visibility === "hidden")
    {
        y.style.visibility = "visible";
    }
    else 
    {
        x.style.visibility = "visible";
        y.style.visibility = "hidden";
    }
    do 
    {
        var distanceCar1 = Math.floor((Math.random() * 10) + 1) + 20;
        document.getElementById("car1").style.left = distanceCar1 + "px";
    }
    while (car1.style.left < 1000)
    do 
    {
        var distanceCar2 = Math.floor((Math.random() * 10) + 1) + 20;
        document.getElementById("car1").style.left = distanceCar2 + "px";
    }
    while (car2.style.left <1000) 
    {
        alert("The race is over!");
    }

}

