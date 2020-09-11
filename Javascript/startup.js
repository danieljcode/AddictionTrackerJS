const button = document.getElementById("submitButton");
const container = document.getElementById("container");

const nameInput = document.getElementById("nameIn");
const addictionInput = document.getElementById("addictionIn");

var dataHasBeenEntered = false;

function CheckForSavedData(){
//This function checks if there is data saved in localStorage and redirects the user if there is

    if(localStorage.getItem("USERNAME") == null || localStorage.getItem("USERNAME") == undefined){

        //No data has been saved, keep the user on this start page

    }else{

        //Data has been saved... redirect the user away from this page to the main page

    }


}

function CheckForBlanks(){

    if(nameInput.value == ""){
        dataHasBeenEntered = false;

        nameInput.classList.toggle("warn"); //Setting the class list to include warn which I will use to style the input red in CSS

    }else{

        addictionInput.classList.toggle("yes"); //Setting the class list to have yes which will be green in CSS
    }

    if(addictionInput.value == ""){
        dataHasBeenEntered = false;

        addictionInput.classList.toggle("warn");

    }
    else{

        addictionInput.classList.toggle("yes");
    }



    if((!nameInput.value == "") && (!addictionIn.value == "")){

        //Neither fields are empty... proceeding with the data saving
        dataHasBeenEntered = true;
    }
}


function SaveData(){

    CheckForBlanks();

    if(dataHasBeenEntered){ //Only proceeding with saving the data if bot values have been entered

        var name = nameInput.value;
        console.log(name);

        var addiction = addictionIn.value;
        console.log(addiction);

    }

}


button.addEventListener("click", (e) =>{

    e.preventDefault();

    SaveData();


})