
function SetGoal(goalName, goalDuration){

    localStorage.setItem("currentGoal", JSON.stringify({
        name: goalName,
        duration: goalDuration,
         dateStarted: new Date()
    }))

}

