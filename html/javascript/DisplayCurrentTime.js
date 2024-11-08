function displayCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    alert("Current Time: " + currentTime);
   
    document.getElementById("timeDisplay").innerText = "Current Time: " + currentTime;
}
