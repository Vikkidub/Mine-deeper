createPlayfield(2, 2, 1);
function createPlayfield(rows, columns, bombs) {
    totalCells = rows * columns;
    var bombCount = 0;

    for (var r = 0; r < rows; r++) {
        var row = document.createElement("tr");

        for (var c = 0; c < columns; c++) {
            var column = document.createElement("td");
            column.textContent = "|||||||||||";
            column.style.color = "transparent";

            if (bombCount < bombs && Math.random() < (bombs - bombCount) / (totalCells - (r * columns + c))) {
                column.textContent = "🧨";
                column.onclick = (function (cell) {
                    return function () {
                        bombActivation(cell);
                    };
                })(column);
                bombCount++;
            } else {
                column.onclick = (function (cell) {
                    return function () {
                        safeActivation(cell);
                    };
                })(column);
            }

            row.appendChild(column);
        }

        document.getElementById("playfield").appendChild(row);
    }
}
