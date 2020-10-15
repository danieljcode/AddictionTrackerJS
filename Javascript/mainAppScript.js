const greetingOneDisplay = document.getElementById("GreetingOne");
const greetingTwoDisplay = document.getElementById("GreetingTwo");

function CheckForSavedData() {
    //This function checks if there is data saved in localStorage and redirects the user if there isn't

    console.log("PAGE LOADED");
    if (localStorage.getItem("username") == null || localStorage.getItem("addictionName") == undefined) {
        //No data has been saved, send the user to the start page
        window.location.replace("../index.html")
        localStorage.clear();

    } else {

        //Data has been saved... keep the user here...
    }

}

ShowGreeting();

function ShowGreeting() {

    var date = new Date();
    var addiction = localStorage.getItem("addictionName");

    var currentH = date.getHours();
    if (currentH >= 0) {

        greetingOneDisplay.textContent = "Good morning";
        greetingTwoDisplay.innerHTML = `You <strong>can</strong> beat your ${addiction.toLocaleLowerCase()}!`
    }
    if (currentH >= 12) {
        greetingOneDisplay.textContent = "Good afternoon";
    }
    if (currentH >= 18) {
        greetingOneDisplay.textContent = "Good evening";

    }



}