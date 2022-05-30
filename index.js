// -------------------For button press --------------------

for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      var btnPressed = this.innerHTML;

      switch (btnPressed) {
        //This tells which buttom is clicked
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "k":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
        case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
      }
      btAnimation(btnPressed);
    });
}

// var audio = new Audio(audio.mpr);
// audio.play();

// ---------------------For keypress ----------------------

document.addEventListener("keydown", function (Keyboardevent) {
  var keyPressed = Keyboardevent.key;
  switch (keyPressed) {
    //This tells which buttom is clicked
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
  }
  // this.classList.add("press");
  // setTimeout(rmClass,100){
  //   this.classList.remove("press");
  // }
  btAnimation(keyPressed);
});

function btAnimation(currentKey) {
  var activeB = document.querySelector("." + currentKey);
  activeB.classList.add("press");
  setTimeout(function () {
    activeB.classList.remove("press");
  }, 100);
}
