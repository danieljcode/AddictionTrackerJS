const greetingOneDisplay = document.getElementById("GreetingOne");
const greetingTwoDisplay = document.getElementById("GreetingTwo");

const goalDisplay = document.getElementById("goalDisplay");
const goalDuration = document.getElementById("goalDuration");

const deleteGoalButton = document.getElementById("delGoalBtn");


DateCalculation();
ShowGreeting();
setInterval("updateClock()", 1000);



function CheckForSavedData() {
    //This function checks if there is data saved in localStorage and redirects the user if there isn't

    console.log("PAGE LOADED");
    if (localStorage.getItem("username") == null || localStorage.getItem("addictionName") == undefined) {
        //No data has been saved, send the user to the start page
        window.location.replace("../index.html")
        localStorage.clear();

    } else {
        CheckForGoal();
        //Data has been saved... keep the user here...
    }

}


//GREETING THE USER
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

//THE CLOCK
function updateClock() {

    var currentTime = new Date();

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    // Update the time display
    document.getElementById("clock").innerHTML = currentTimeString;



}

function CheckForGoal() {
    //CHECKING FOR SAVED GOALS

    if (localStorage.getItem("currentGoal")) {
        //A GOAL IS SAVED...
        goalDisplay.textContent = "Name: " + JSON.parse(localStorage.getItem("currentGoal")).name;
        goalDuration.textContent = "Duration: " + JSON.parse(localStorage.getItem("currentGoal")).duration + " Days";

        deleteGoalButton.style.display = "block";
        console.log(i);

    } else {
        //NO GOAL SAVED
        deleteGoalButton.style.display = "none";
    }

}

function Relapse(){

    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    var time;

    if(now.getMinutes() < 10){
        time = `${now.getHours()}:0${now.getMinutes()}` //ADDING A ZERO BEFORE THE MINUTES IF IT'S LESS THAN TEN
    }else{
        time = `${now.getHours()}:${now.getMinutes()}`
    }

    console.log(`${day}/${month}/${year} - ${time}`);

    localStorage.setItem("lastRelapse", JSON.stringify({
        date: `${day}/${month}/${year}`,
        time: time
    }));

}


function DateCalculation(){
    moment().format();

    var lastRelapseDate = JSON.parse(localStorage.getItem("lastRelapse")).date;

    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    var a = moment(lastRelapseDate,'D/M/YYYY');
    var b = moment(`${day}/${month}/${year}`,'D/M/YYYY');
    var diffDays = b.diff(a, 'days');
    alert(diffDays);

}