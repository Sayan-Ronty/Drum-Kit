var drumNumbers = document.querySelectorAll(".drum").length;
for(var i=0;i<drumNumbers;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInner = this.innerHTML;
        makeSound(buttonInner);
        buttonAni(buttonInner);
    });
}

for(var i=0;i<drumNumbers;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("touchstart",function(){
        var buttonInner = this.innerHTML;
        makeSound(buttonInner);
        buttonAni(buttonInner);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAni(event.key);
});

document.addEventListener("touchstart", function(event){
    makeSound(event.touches);
    buttonAni(event.touches);
});

function makeSound(key)
{
    switch(key)
    {
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
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInner);
    }
}

function buttonAni(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}