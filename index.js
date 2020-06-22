// DETECTING CLICKS
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    drumKit(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
// DETECTING KEY PRESSED
document.addEventListener("keydown", function () {
  drumKit(event.key);
  buttonAnimation(event.key);
});

function drumKit(touch) {
  switch (touch) {
    case "w":
      let w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    case "a":
      let a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    case "s":
      let s = new Audio("sounds/snare.mp3");
      s.play();
      break;
    case "d":
      let d = new Audio("sounds/tom-1.mp3");
      d.play();
      break;
    case "j":
      let j = new Audio("sounds/tom-2.mp3");
      j.play();
      break;
    case "k":
      let k = new Audio("sounds/tom-3.mp3");
      k.play();
      break;
    case "l":
      let l = new Audio("sounds/tom-4.mp3");
      l.play();
      break;
    default:
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
