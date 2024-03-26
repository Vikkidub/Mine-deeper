updateView();
function updateView(){
app.innerHTML = /*HTML*/`
<h1>Mine deeper</h1>

<div id="levelDiv">Level: ${level}</div>
<div id="energyDiv">Energy: ${gamestate.remainingClicks}</div>

<table id="playfield"></table>
<div id="scoreDiv">Gold: ${score}</div>
<div id="textDiv">Choose a spot to start mining</div>
<br></br>

<h2>Upgrades</h2>
<div>Night vision: ${gamestate.nightVision}</div>
<button id="upgradeButton" onclick="enableUpgrade('nightVision', 10); activateNightVision()">Purchase for 10 Gold</button>
<br></br>
<div>Bomb specialist: ${gamestate.bombSpecialist}</div>
<button id="upgradeButton" onclick="enableUpgrade('bombSpecialist', 20)">Purchase for 20 Gold</button>
`;
}
