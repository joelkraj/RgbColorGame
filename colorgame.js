var colors = generateRandomColors(numSquares);
var numSquares = 6;
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
	reset();
});

function init(){
	//mode buttons
	setUpModeButtons();
	setUpSquares();
	reset();
}
function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy Mode") {
				numSquares = 3;
			}else {
				numSquares = 6;
			}
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?"
			}else{
				this.style.background = "#232323"
				messageDisplay.textContent = "Try Again"
			}
		});
	}	
}
function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	resetButton.textContent = "New Colors"
	//change color display to picked color
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
		squares[i].style.display = "block";			
		squares[i].style.background = colors[i];			
	}else {
		squares[i].style.display = "none";
	}

	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
}


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < colors.length; i++){
	//change colors to match picked color
		squares[i].style.background = color;		
	};
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function palindrome(str) {
  // remove non-aplhanumeric characthers
  var palindromeValue = true;
  for(var i = 0; i < str.length; i++){
    var arrChar = ["~", "`", "]", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", 
                   ")", "-", "_", "+", "=", "{", "}", "\\", "|", "'", '"', ";", ":",
                  "/", "?", ">", "<", ".", ",", " "];
    for(var j = 0; j < arrChar.length; j++){
      if(str[i] === arrChar[j]){
        str.replace(/arrChar[j]/, "");
      }
    }
    if(str.toLowerCase().split("")[i] === str.toLowerCase().split("").reverse()[i]){
    }else{
      palindromeValue = false;
    }

  }
  // compare reversed str to normal str
  return palindromeValue;
}
palindrome("eye");
