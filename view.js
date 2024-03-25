updateView();
function updateView(){
app.innerHTML = /*HTML*/`
<h1>Mine deeper</h1>

<div id="levelDiv">Level: ${level}</div>
<div id="energyDiv">Energy: ${gamestate.remainingClicks}</div>

<table id="playfield"></table>
<div id="scoreDiv"></div>
<div id="textDiv"></div>
</br>

<h2>Upgrades</h2>
<div>Bomb specialist: ${gamestate.bombSpecialist}</div>
<button id="upgradeButton" onclick="enableUpgrade('bombSpecialist', 20)">Purchase for 20 Gold</button>

<div>Night vision: ${gamestate.nightVision}</div>
<button id="upgradeButton" onclick="enableUpgrade('nightVision', 10); activateNightVision()">Purchase for 10 Gold</button>
`;
scoreDiv.innerHTML = "Gold: " + score
}
