function updatePlayfield() {
    document.getElementById('playfield').innerHTML = "";
    totalCellsClicked = 0;

    if (level == 2) {
        createPlayfield(3, 3, 2);
    }
    if (level == 3) {
        createPlayfield(4, 4, 3);
    }
    if (level == 4) {
        createPlayfield(5, 5, 4);
    }
    if (level == 5) {
        createPlayfield(6, 6, 5);
    }
}

function bombActivation(bomb) {
    document.getElementById('textDiv').innerHTML = "You clicked a bomb!";
    bomb.style.backgroundColor = "grey";
    bomb.style.color = "black";
    totalCellsClicked++;
    checkGameStatus();
}

function safeActivation(safespace) {
    document.getElementById('textDiv').innerHTML = "Nice going!";
    safespace.style.backgroundColor = "green";
    totalCellsClicked++;
    checkGameStatus();
}

function checkGameStatus() {
    if (totalCellsClicked === totalCells) {
        level++;
        updateView();
        document.getElementById('textDiv').innerHTML = "Well done. Entering level: " + level;
        updatePlayfield();
    }
}
