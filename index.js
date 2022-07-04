for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        keyChecker(buttonInnerHtml);
    });
}


document.addEventListener("keypress", function(event){
    
});

