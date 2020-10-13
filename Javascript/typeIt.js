new TypeIt("#greeting", {
  strings: "Hello and welcome to Addiction Tracker!",
  speed: 100,
  waitUntilVisible: true,
  cursor: false
}).go();


setTimeout(() =>{
    new TypeIt("#instructions", {
        strings: "To get started enter your name below!",
        speed: 85,
        waitUntilVisible: true
      }).go();

}, 4200)
