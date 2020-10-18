const slider = document.getElementById("slider");

var timesArray;

SaveTime();

slider.addEventListener("change", (event) => {

    console.log(slider.value);
    //SHOW THE BACK BTN
    document.getElementById("back").style.display = "block";

    //SAVING THE MOOD
    localStorage.setItem("lastRelapseMOOD", slider.value);


    if (slider.value == 5) {
        console.log("User has set their mood to despairing...");
        //Show the user advice on low moods...

        document.getElementById("help").style.display = "block"
    } else {
        document.getElementById("help").style.display = "none"
    }

})

function SaveTime(){
    //THIS FUNCTION CALCULATES AND SAVES WHAT TIME OF DAY IT IS (MORNING, AFTERNOON, ETC)

    timesArray = JSON.parse(localStorage.getItem("timesArray"));
    var date = new Date();

    var currentH = date.getHours();
    if (currentH >= 0 && currentH < 12) {
        //MORNING  
        timesArray.push("morning");
    }
    if (currentH >= 12 && currentH < 18) {
        //AFTERNOON
        timesArray.push("afternoon");
        
    }
    if (currentH >= 18) {
        //NIGHT
        timesArray.push("night");
    }
    
    //SAVING THIS NEW ARRAY
    localStorage.setItem("timesArray", JSON.stringify(timesArray));
}