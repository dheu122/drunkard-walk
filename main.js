var canvas = Config.canvas;

canvas.height = Config.canvasHeight;
canvas.width = Config.canvasWidth;

// Runs the actual algorithm
var grid = new Generator.Grid();

grid.init({
    width: 35,
    height: 35,
    agentMaxRunTime: 50,
    agentDirChangePercentage: 0.25
});

grid.generate();

grid.render();