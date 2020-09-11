const greetingOneDisplay = document.getElementById("GreetingOne");
const greetingTwoDisplay = document.getElementById("GreetingTwo");

const userName = localStorage.getItem("USERNAME");

var welcomeMessage;

FirstTimeCheck();
ShowGreeting();

function FirstTimeCheck(){
    //checking if this is the users first time here or not

    if(localStorage.getItem("FIRSTTIME") == null || localStorage.getItem("FIRSTTIME") === undefined){
        //User has not been here before...
        welcomeMessage = `Welcome to Addiction tracker for the first time ${userName}!`;
        localStorage.setItem("FIRSTTIME", "NO"); //Setting this value so the user doesnt see the first time message on their next visit

    }else{
        //User has been here before, change greeting to match
        welcomeMessage = `Welcome back ${userName}`;
        
    }

}

function ShowGreeting(){

    var date = new Date();

    var hourNow = date.getHours();
    if(hourNow > 0){

        greetingOneDisplay.textContent = `Good morning ${userName}`;
        greetingTwoDisplay.textContent = welcomeMessage;

    }else if(hourNow > 12){
        greetingOneDisplay.textContent = `Good afternoon ${userName}`;
        greetingTwoDisplay.textContent = welcomeMessage;
    }else if(hourNow > 18){
        greetingOneDisplay.textContent = `Good evening ${userName}`;
        greetingTwoDisplay.textContent = welcomeMessage;
    }

    

}

