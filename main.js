// Runs the actual algorithm
var grid = new Generator.Grid();
var canvas = Config.canvas;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', resizeCanvas, false);

grid.init({
    width: 35,
    height: 35,
    agentMaxRunTime: 50,
    agentDirChangePercentage: 0.25
});

grid.generate();

grid.render();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    grid.render();
}
