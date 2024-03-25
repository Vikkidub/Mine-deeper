var app = document.getElementById('app');

var level = 1;
var totalCells = 2 * 2;
var totalCellsClicked = 0;
var score = 0; // gold

var gamestate = {
   remainingClicks: 3, 
   bombSpecialist: false, // doubled explosion impact
   nightVision: false // reveals bomb locations for one level
};

