var Generator = {
    Grid: function() {
        this.ctx = Config.ctx;

        this.grid = []
        this.width = 10;
        this.height = 10;

        this.agentRunTime = 100;
        this.agentDirChangePercentage = 0.25;

        this.gridTotal = 0;

        this.init = function(options) {
            // Inits a clean grid with a randomized agent placement and options reset
            this.grid = [];
            this.width = options.width;
            this.height = options.height;
            
            this.agentMaxRunTime = options.agentMaxRunTime;
            this.agentDirChangePercentage = options.agentDirChangePercentage;

            this.gridTotal = this.width * this.height;

            for(var i = 0; i < this.width * this.height; i++) {
                this.grid.push(1)
            }
        }

        this.generate = function() {
            // Starts moving the agent depending on options
            var agentStartPosition = Math.floor(Math.random() * (this.gridTotal - 1));
            var agentTempTile = 0;
            var agentPrevTile = 0;
            var agentCurTile = agentStartPosition;
            var agentDirChangePercentage = 0;
            var agentDir = 0;
            var agentRunTime = 0;

            this.grid[agentStartPosition] = 2;

            while(agentRunTime < this.agentMaxRunTime) {
                // Agent makes decisions here and changes the grid array;
                agentTempTile = agentCurTile;
                agentPrevTile = agentTempTile;
                switch(agentDir) {
                    case 0:
                        agentCurTile++;
                        break;
                    case 1:
                        agentCurTile+=(this.height);
                        break;
                    case 2:
                        agentCurTile--;
                        break
                    case 3:
                        agentCurTile-=(this.height);
                        break;
                }

                if(agentCurTile < 0 || agentCurTile >= this.gridTotal) {
                    agentCurTile = agentTempTile;
                    agentDir = Math.floor(Math.random() * 3);
                }
                else {
                    this.grid[agentPrevTile] = 0;
                    this.grid[agentCurTile] = 2;
                }

                agentDirChangePercentage = Math.random();
                if(agentDirChangePercentage > this.agentDirChangePercentage) {
                    agentDir = Math.floor(Math.random() * 3);
                }

                agentRunTime++;
            }
            console.log(this.grid);

        }

        this.render = function() {
            // Renders the canvas depending on the grid
            var tile = -1;
            for(var x = 0; x < this.width; x++) {
                for(var y = 0; y < this.height; y++) {
                    tile++;
                    this.ctx.fillStyle="#000000";
                    if(this.grid[tile] == 0) {
                        
                    }
                    else if(this.grid[tile] == 1) {
                        this.ctx.fillRect(x * 16, y * 16, 16, 16);
                    } 
                    else {
                        this.ctx.fillStyle="#FF0000";
                        this.ctx.fillRect(x * 16, y * 16, 16, 16);
                    }
                }
            }
        }

    }
}