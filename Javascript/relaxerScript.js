const pointer = document.getElementById("point");
const container = document.getElementById("container");
const TextMsg = document.getElementById("txt");

const totalTime = 8000; //the total time taken in mileseconds
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

if(localStorage.getItem("FIRSTTIMErelaxer") == null || localStorage.getItem("FIRSTTIMErelaxer") == undefined){



var r = confirm(`Welcome, This relaxer is designed to help you breather, calm down and beat any cravings!
Follow the instructions as they are presented...`);

    if (r == true) {
        BreatheAnimation();
    } else {
        window.location.replace("app.html");
    }

    //Showing the user a message If the have not been to the relaxer before
    localStorage.setItem("FIRSTTIMErelaxer", "NO"); //Updating local storage so they won't see this message again...

}else{

    BreatheAnimation();

}



//console.log(totalTime, breatheTime, holdTime);



function BreatheAnimation(){
    TextMsg.innerText = "Breathe in!";
    container.className = "container grow";

    setTimeout(() =>{
        TextMsg.innerText = "Hold";

        setTimeout(() =>{
            TextMsg.innerText = "Exhale 💨💨";
            container.className = "container shrink";

        }, holdTime);
    }, breatheTime);

}setInterval(BreatheAnimation, totalTime);

function RedirectUserBACK(){

    window.location.replace("app.html");

}