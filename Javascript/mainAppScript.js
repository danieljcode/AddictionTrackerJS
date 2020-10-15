const greetingOneDisplay = document.getElementById("GreetingOne");
const greetingTwoDisplay = document.getElementById("GreetingTwo");

const goalDisplay = document.getElementById("goalDisplay");

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

ShowGreeting();

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
setInterval("updateClock()", 1000);

//THE CLOCK
function updateClock ( )
{

  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").innerHTML = currentTimeString;



}

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
    return this;
};


Date.prototype.addWeeks = function(weeks) {
    this.addDays(weeks*7);
    return this;
};

Date.prototype.addMonths = function (months) {
    var dt = this.getDate();

    this.setMonth(this.getMonth() + months);
    var currDt = this.getDate();

    if (dt !== currDt) {  
        this.addDays(-currDt);
    }

    return this;
};

Date.prototype.addYears = function(years) {
    var dt = this.getDate();

    this.setFullYear(this.getFullYear() + years);

    var currDt = this.getDate();

    if (dt !== currDt) {  
        this.addDays(-currDt);
    }

    return this;
};

var now = new Date();
console.log(now.addWeeks(1));

function CheckForGoal(){
    //CHECKING FOR SAVED GOALS

    if(localStorage.getItem("currentGoal")){
        //A GOAL IS SAVED...
        goalDisplay.textContent = JSON.parse(localStorage.getItem("currentGoal")).duration;
    }else{
        //NO GOAL SAVED
    }

}
    