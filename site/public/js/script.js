let brick = 0;
let bricksPerSecond = 0;
const brickId = document.getElementById('brick')
const pedreiroBuildingNum = document.getElementById('pedreiroBuildingNum');
const construtoraBuildingNum = document.getElementById('construtoraBuildingNum');
const btnBrick = document.getElementById('btnBrick')
const btnUpgPedreiro = document.getElementById('btnUpgPedreiro');
const btnUpgConstrutora = document.getElementById('btnUpgConstrutora');
function Building(buildingName, totalBuildings, bpsBuilding, buildingCost){
    this.buildingName = buildingName + 'Building';
    this.totalBuildings = totalBuildings;
    this.bpsBuilding = bpsBuilding;
    this.buildingCost = buildingCost;
}
let bpsUpgrade = setInterval(() => {
    brick += bricksPerSecond;
    brickId.innerHTML = brick;
}, 1000);


let pedreiroBuilding = new Building('pedreiro', 0, 1, 10, 0.33);
let construtoraBuilding = new Building('construtora', 0, 5, 100, 0.35);


function handWork(){
    brick += 1;
    brickId.innerHTML = brick;
}


function upgrade(building){
    if(brick >= building.buildingCost){
        let buildingName = building.buildingName;
        let buildingNum = document.getElementById(buildingName + 'Num');
        let buildingCost = document.getElementById(buildingName + 'Cost');
        building.totalBuildings += 1;
        bricksPerSecond += building.bpsBuilding;
        brick -= building.buildingCost;
        building.buildingCost = Number((building.buildingCost * 1.10 ** building.totalBuildings).toFixed(0));
        brickId.innerText = brick;
        buildingNum.innerHTML = building.totalBuildings;
        buildingCost.innerText = building.buildingCost;
    }
}

btnBrick.addEventListener("click", handWork);
btnUpgPedreiro.addEventListener("click", () =>{
    upgrade(pedreiroBuilding)
});
btnUpgConstrutora.addEventListener("click", () =>{
    upgrade(construtoraBuilding);
});
