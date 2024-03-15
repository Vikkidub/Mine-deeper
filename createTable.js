createPlayfield(2, 2, 1);

function createPlayfield(rows, columns, bombs) {
    totalCells = rows * columns;
    var bombCount = 0;

    for (var r = 0; r < rows; r++) {
        var row = document.createElement("tr");

        for (var c = 0; c < columns; c++) {
            var cell = document.createElement("td");
            
            cell.textContent = "|||||||||||";
            cell.style.color = "transparent";
            cell.clicked = false;

            if (bombCount < bombs && Math.random() < (bombs - bombCount) / (totalCells - (r * columns + c))) {
                cell.textContent = "🧨";
                cell.onclick = (function (cell) {
                    return function () {
                        if (!cell.clicked) {
                            bombActivation(cell);
                            cell.clicked = true; 
                        }
                    };
                })(cell);
                bombCount++;
            } else {
                cell.onclick = (function (cell) {
                    return function () {
                        if (!cell.clicked) {
                            safeActivation(cell);
                            cell.clicked = true; 
                        }
                    };
                })(cell);
            }

            row.appendChild(cell);
        }
        document.getElementById("playfield").appendChild(row);
    }
}

