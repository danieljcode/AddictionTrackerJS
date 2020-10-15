
const days = document.getElementById("daysSelect");
const name = document.getElementById("nameInput");

function GoalData(){
    var nameSelected = name.value;
    var daysSelected =  days.value;
    SetGoal(nameSelected, daysSelected);
}

function SetGoal(goalName, goalDuration){

    localStorage.setItem("currentGoal", JSON.stringify({
        name: goalName,
        duration: goalDuration,
         dateStarted: new Date()
    }))

    window.location.replace("../main-app/app.html")

}

