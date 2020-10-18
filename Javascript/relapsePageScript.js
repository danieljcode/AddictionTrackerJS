const slider = document.getElementById("slider");

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