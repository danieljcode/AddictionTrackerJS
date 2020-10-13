var optionSelected = localStorage.getItem("typeOfAddiction");
var addictionType;

if(optionSelected == 1){
    addictionType = "drug/substance addiction";
    //THE USERS ADDICTION TYPE IS SUBSTANCE
}else{
    addictionType = "behavioral addiction"
    //THE USERS ADDICTION TYPE IS BEHAVIORAL
}

console.log(optionSelected);
new TypeIt("#message", {
    strings: `You selected ${addictionType}`,
    speed: 75,
    waitUntilVisible: true,
    cursor: false
  }).go();