var Board
const HumanP = '0'
const AiP = 'X'
const WinCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]
const cells = document.querySelectorAll(".cell")

StartGame()

function StartGame(){
	document.querySelector(".endgame").style.display = "none"
	Board = Array.from(Array(9).keys())
	for (var i = 0; i < cells.lenght; i++) {
		cells[i].innerText = ''
		cells[i].style.removeProperty('background-color')
		cells[i].addEventListener("click", turnClick, false)
	}
}

function turnClick(event) {
	console.log(event.target.id)
	turn(square.target.id, HumanP)
}

function turn(squareId, Player) {
	Board[squareId] = Player
	document.getElementById(squareId).innerText = Player
}