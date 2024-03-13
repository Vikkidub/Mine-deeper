updateView();
function updateView(){
app.innerHTML = /*HTML*/`
<h1>Mine deeper</h1>
<div id="levelDiv">Level: ${level}</div>
<div id="energyDiv">Energy: ${gamestate.remainingClicks}</div>
<table id="playfield"></table>
<div id="scoreDiv"></div>
<div id="textDiv"></div>
`;
scoreDiv.innerHTML = "Score: " + score
}
