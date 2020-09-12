const greetingOneDisplay = document.getElementById("GreetingOne");
const greetingTwoDisplay = document.getElementById("GreetingTwo");
const motivationDisplay = document.getElementById("motivation");

const userName = localStorage.getItem("USERNAME");

var welcomeMessage;

FirstTimeCheck();
ShowGreeting();
ShowMotivation();

function CheckForSavedData(){
    //This function checks if there is data saved in localStorage and redirects the user if there isn't
    
        console.log("PAGE LOADED");
        if(localStorage.getItem("USERNAME") == null || localStorage.getItem("ADDICTION") == undefined){
            //No data has been saved, send the user to the start page
            window.location.replace("index.html")
            localStorage.clear();
    
        }else{
    
            //Data has been saved... keep the user here...
        }
    }

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
    if(hourNow >= 0){ //Added the arrow = so the line is now more than or equal too zero... This fixes the problem I was having...

        greetingOneDisplay.textContent = `Good morning `;
        greetingTwoDisplay.textContent = welcomeMessage;

    }else if(hourNow >= 12){
        greetingOneDisplay.textContent = `Good afternoon`;
        greetingTwoDisplay.textContent = welcomeMessage;
    }else if(hourNow >= 18){
        greetingOneDisplay.textContent = `Good evening`;
        greetingTwoDisplay.textContent = welcomeMessage;
    }

    

}

function ShowMotivation(){

    var motivation = ["As human beings, our greatness lies not so much in being able to remake the world… as in being able to remake ourselves. - Mahatma Gandhi", "You cannot solve a problem from the same consciousness that created it. You must learn to see the world anew. - Albert Einstein", "If you find yourself in a hole, the first thing to do is stop digging. - Unknown", "The best way out is always through. – Robert Frost", "The opposite of addiction is not sobriety, but human connection. - Unknown", "I’m Not Telling You It Is Going To Be Easy, I’m Telling You It’s Going To Be Worth It. - Unknown", "You Are Not Defined By your Relapses, But By My Decision To Remain In Recovery Despite Them. - Unknown"];
    //All the motivational quotes stored in an array


    var rand = Math.floor((Math.random() * 7) + 1);
    //console.log(rand);

    var quoteToShow = motivation[rand - 1]; //The randomnumber is between 1 and 7 so I have to take one off so the numbers ill be between 0 and 6 for the array...
    console.log(quoteToShow);

    motivationDisplay.textContent = quoteToShow;


}setInterval(ShowMotivation, 25000); //Running this again every 25 seconds


function RedirectUserEMERGENCY(){

    window.location.replace("breathingApp.html");

}