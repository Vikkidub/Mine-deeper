    function createPlayfield(rows, columns, bombs){
    
    for (r = 0; r < rows; r++){
    var row = document.createElement("tr");
    
    for (c = 0; c < columns; c++){
    var column = document.createElement("td");
    column.textContent = "|||||||||||";
    column.style.color = "transparent";

    var isBomb = Math.random() < bombs / (rows * columns);

    if (isBomb) {
        column.textContent = "🧨";
        column.onclick = (function (currentColumn) {
            return function () {
                bombActivation(currentColumn);
            };
        })(column);
    } else {
        column.onclick = (function (currentColumn) {
            return function () {
                safeActivation(currentColumn);
            };
        })(column);
    }
    
    row.appendChild(column);
    }
    
    document.getElementById("playfield").appendChild(row);
    }
}

