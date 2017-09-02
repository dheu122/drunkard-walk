// Runs the actual algorithm
var grid = new Generator.Grid();

grid.init({
    width: 10,
    height: 10,
    agentMaxRunTime: 50,
    agentDirChangePercentage: 0.25
});

grid.generate();