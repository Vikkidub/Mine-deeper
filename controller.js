function updatePlayfield() {
    document.getElementById('playfield').innerHTML = "";
    totalCellsClicked = 0;
   
    if (level == 1) {
        gamestate.remainingClicks = 3;
        updateView();
        createPlayfield(2, 2, 1);
    }
    else if (level == 2) {
        gamestate.remainingClicks += 5;
        updateView();
        createPlayfield(3, 3, 4);
    }
    else if (level == 3) {
        gamestate.remainingClicks += 8;
        updateView();
        createPlayfield(4, 4, 8);
    }
    else if (level == 4) {
        gamestate.remainingClicks += 10;
        updateView();
        createPlayfield(5, 5, 10);
    }
    else if (level == 5) {
        gamestate.remainingClicks += 12;
        updateView();
        createPlayfield(6, 6, 11);
    }
}
function bombActivation(bomb) {
    document.getElementById('textDiv').innerHTML = "You clicked a bomb!";
    bomb.style.backgroundColor = "grey";
    bomb.style.color = "black";
    score += 3;
    document.getElementById('scoreDiv').innerHTML = score
    gamestate.remainingClicks--;
    document.getElementById('energyDiv').innerHTML = "Energy: " + gamestate.remainingClicks;
    updateActiveCells(3);
    if (gamestate.bombSpecialist) { updateActiveCells(2); }
    checkGameStatus();
}
function safeActivation(safespace) {
    
    document.getElementById('textDiv').innerHTML = "Nice going!";
    safespace.style.backgroundColor = "green";
    score++;
    document.getElementById('scoreDiv').innerHTML = score
    gamestate.remainingClicks--;
    document.getElementById('energyDiv').innerHTML = "Energy: " + gamestate.remainingClicks;
    updateActiveCells(1);
    checkGameStatus();
}
function updateActiveCells(activatedCells){
totalCellsClicked += activatedCells;
}

function checkGameStatus() {
    // failure state
    if (gamestate.remainingClicks < 1 && totalCellsClicked < totalCells){
        document.getElementById('textDiv').innerHTML = "That's enough for today. Try again tomorrow";
        alert("GAME OVER");
        score = 0;
        level = 1;
        updatePlayfield();
    }
    // beating the game
    else if (totalCellsClicked >= totalCells && level == 5) {
        updateView();
        document.getElementById('textDiv').innerHTML = "Congratulations! You succesfully mined to the end";
    }
    // progressing to next level
   else if (totalCellsClicked >= totalCells) {
        level++;
        updateView();
        document.getElementById('textDiv').innerHTML = "Well done. Entering level: " + level;
        updatePlayfield();
    }
}

