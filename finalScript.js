function changeLight() {
    var x = document.getElementById("trafficRed");
    var y = document.getElementById("trafficGreen");
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
    
    var distance = Math.floor((Math.random() * 10) + 1) + 20;
    document.getElementById("car1").style.left = distance + "px";
}
