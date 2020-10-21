new TypeIt("#message", {
    strings: "Your freedom begins now!",
    speed: 70,
    waitUntilVisible: true,
    cursor: false
  }).go();

  setTimeout(()=>{

    new TypeIt("#message2", {
        speed: 60,
        waitUntilVisible: true,
        cursor: true
      }).type("Welcome to Trackr V1.01! ")
      .type("An source", {delay: 100})
      .move(-6, {speed: 25, delay: 100})
      .type('open ')
      .move("END", {delay: 300})
      .type(" web app", {delay: 150})
      .type(" built using Javascript.")
      .go();

  }, 2100)

  if(localStorage.getItem("username")){
    document.getElementById("btn1").innerHTML = "Resume app";
  }