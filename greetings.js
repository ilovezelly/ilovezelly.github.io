document.addEventListener("DOMContentLoaded", function() {
    // Get the current time
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    // Get the name from local storage (to during login)
    let storedName = localStorage.getItem("studentLogin");
    let studentLogins = storedName ? JSON.parse(storedName) : [];

    // Extract usrname values
    let userName = studentLogins.map(login => login.usrname);

    let recentData = userName[userName.length - 1];

    // Greet the user based on the time
    let greetingMessage;
    if (currentHour < 12) {
        greetingMessage = "Good morning";
    } else if (currentHour < 18) {
        greetingMessage = "Good afternoon";
    } else {
        greetingMessage = "Good evening";
    }

    // Display the greeting message with the user's name
    let greetingDiv = document.getElementById("greetings");
    {
        greetingDiv.textContent = `${greetingMessage}, ${recentData}!`;
    } 

});
