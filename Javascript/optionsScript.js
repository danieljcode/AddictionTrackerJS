new TypeIt("#message", {
    speed: 75,
    waitUntilVisible: true,
    cursor: false
  }).go();

const option1 = document.getElementById("substance");
const option2 = document.getElementById("behavior");

option1.addEventListener("click", (event) =>{

  console.log("User has selected substance addiction category");
  option1.classList.toggle("selected");
  option2.classList.remove("selected");

})
option2.addEventListener("click", (event) =>{

  console.log("User has selected behavioral addiction category");
  option2.classList.toggle("selected");
  option1.classList.remove("selected");

})