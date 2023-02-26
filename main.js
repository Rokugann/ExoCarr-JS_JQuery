let squareBoy = document.querySelector(".squareBoy");
let squareGirl = document.querySelector(".squareGirl");

let fResetSquare = function ResetSquare()
{
    squareBoy.style.borderWidth = "5px";
    squareBoy.style.borderRadius = "15px";
    squareBoy.style.backgroundColor = "coral";
    squareBoy.style.height = "100px";
    squareBoy.style.witdh = "100px";
    squareGirl.style.borderWidth = "5px";
    squareGirl.style.borderRadius = "15px";
    squareGirl.style.backgroundColor = "violet";
    squareGirl.style.height = "100px";
    squareGirl.style.witdh ="100px";
}

let fGrowSquare = function GrowSquare()
{
    let base = Number(squareBoy.style.height.replace("px", ""))
    squareBoy.style.height = (base + 5) + "px";
}

let fShrinkSquare = function ShrinkSquare()
{

}

document.addEventListener("keydown", function(event) {
switch(event.keycode)
{
    case "ArrowDown":
    break;
    case "ArrowLeft":
    break;
    case "ArrowRight":
    break;
    case "ArrowUp":
    break;
}
})

fResetSquare();
fGrowSquare();
fShrinkSquare();
