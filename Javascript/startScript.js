function CheckData() {
    //THIS FUNCTION CHECKS TO SEE IF THERE IS DATA SAVED IN LOCALSTORAGE RELEATED TO THIS APPLICATION.
    //IF THERE IS DATA IT MEANS THE USER HAS ALREADY BEGAN USING THIS APP AND DOES NOT NEED TO ACCESS THIS PAGE
    //SO IT WILL REDIRECT USERS AWAY FROM THIS PAGE

    if (localStorage.getItem("username")) {
        //USER HAS USED APP BEFORE, REDIRECT!
        window.location.replace("app.html");
    } else {
        //THE USER HAS NOT USED THE APP BEFORE, KEEP THEM ON THIS PAGE
    }
}

const nameInput = document.getElementById("name");
nameInput.addEventListener("change", () => {

    if (nameInput.value) {

        nameInput.classList.toggle("green");
        localStorage.setItem("username", nameInput.value);
        //SAVING WHAT THE USER HAS ENTERED INTO LOCAL STORAGE
    } else {
        nameInput.classList.toggle("red")
    }

})

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {

    e.preventDefault();

    if (nameInput.value) {

        nameInput.classList.toggle("green");
        window.location.replace("options.html");
        //THE USER HAS SUBMITTED TEXT, REDIRECTING THEM
    } else {

        nameInput.classList.toggle("red")
        //WARNING THE USER TO ENTER A VALUE
    }
})