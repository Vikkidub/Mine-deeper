var level = 3;


if (level == 1) {
    createPlayfield(2, 2, 1);
}

if (level == 2) {
    createPlayfield(4, 4, 3);
}

if (level == 3) {
    createPlayfield(10, 5, 5);
}


function bombActivation(bomb) {
    document.getElementById('textDiv').innerHTML = "You clicked a bomb!";
    bomb.style.backgroundColor = "grey";
    bomb.style.color = "black";
}

function safeActivation(safespace) {
    document.getElementById('textDiv').innerHTML = "Nice going!";
    safespace.style.backgroundColor = "green";
}