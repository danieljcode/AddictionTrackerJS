new TypeIt("#message", {
    strings: "Your freedom begins now!",
    speed: 40,
    waitUntilVisible: true,
    cursor: false
  }).go();

  setTimeout(()=>{

    new TypeIt("#message2", {
        speed: 60,
        waitUntilVisible: true,
        cursor: true
      }).type("Welcome to Addiction Tracker V1.01! ")
      .type("An source", {delay: 100})
      .move(-6, {speed: 25, delay: 100})
      .type('open ')
      .move("END", {delay: 200})
      .type(" addiction tracker", {delay: 150})
      .type(" built using Javascript.")
      .go();

  }, 2000)