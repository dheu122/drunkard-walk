var Config = {
    canvas: document.querySelector('canvas'),
    ctx: document.querySelector('canvas').getContext("2d"),
    canvasWidth: 800,
    canvasHeight: 600,

    gridWidth: 100,
    gridHeight: 100,

    roomWidthMin: 3,
    roomWidthMax: 3,
    roomHeightMin: 3,
    roomHeightMax: 3,
    
    agentMaxRunTime: 100,
    agentRoomPlacementPercentage: 0.25,
    agentDirectionChangePercentage: 0.25,
}