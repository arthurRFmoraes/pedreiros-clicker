var cash = 0;
var pedreiroTotalBuildings = 0;
var construtoraTotalBuildings = 0;

function handWork(){
    cash += 1;
    document.getElementById('cash').innerHTML = cash
}

function bricksPerSecond(){
    setTimeout(() => {
        alert('a')
    }, 1000);
}
function upgradePedreiro(){
    pedreiroTotalBuildings += 1;
    document.getElementById('pedreiroTotalBuildings').innerText = pedreiroTotalBuildings
}
function upgradeConstrutora(){
    construtoraTotalBuildings += 1;
    document.getElementById('construtoraTotalBuildings').innerHTML = construtoraTotalBuildings
}