for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        this.style.color = "white";
    });
}


// var audio = new Audio('sounds/crash.mp3');
// audio.play();