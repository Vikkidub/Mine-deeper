createPlayfield(2, 2, 1);
function createPlayfield(rows, columns, bombs) {
    totalCells = rows * columns;

    for (r = 0; r < rows; r++) {
        var row = document.createElement("tr");

        for (c = 0; c < columns; c++) {
            var column = document.createElement("td");
            column.textContent = "|||||||||||";
            column.style.color = "transparent";

            var isBomb = Math.random() < bombs / (rows * columns);

            if (isBomb) {
                column.textContent = "🧨";
                column.onclick = (function (cell) {
                    return function () {
                        bombActivation(cell);
                    };
                })(column);
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