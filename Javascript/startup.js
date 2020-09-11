const button = document.getElementById("submitButton");
const container = document.getElementById("container");

const nameInput = document.getElementById("nameIn");
const addictionInput = document.getElementById("addictionIn");

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
    


    }

    if(addictionIn.value == ""){



    }

    if((!nameInput.value == "") && (!addictionIn.value == "")){

        //Neither fields are empty... proceeding with the data saving

    }
}


function SaveData(){

    CheckForBlanks();

    var name = nameInput.value;
    console.log(name);

    var addiction = addictionIn.value;
    console.log(addiction);

}


button.addEventListener("click", (e) =>{

    e.preventDefault();

    SaveData();


})