// Runs the actual algorithm
var grid = new Generator.Grid();
var canvas = Config.canvas;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', resizeCanvas, false);

grid.init({
    width: 35,
    height: 35,
    roomWidthMin: 4,
    roomWidthMax: 7,
    roomHeightMin: 4,
    roomHeightMax: 7,
    agentMaxRunTime: 100,
    agentDirChangePercentage: 0.75,
    agentRoomPlacementPercentage: 0.95
});

grid.generate();

grid.render();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    grid.render();
}
