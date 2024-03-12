var app = document.getElementById('app');

updateView();
function updateView(){
app.innerHTML = /*HTML*/`
<h1>Mine deeper</h1>
<div id="statsDiv">Level: ${level}</div>
<table id="playfield"></table>
<div id="textDiv"></div>
`;
}

