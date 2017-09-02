var Generator = {
    Grid: function() {
        this.ctx = Config.ctx;

        this.grid = []
        this.border = [];
        this.width = 10;
        this.height = 10;

        this.agentRunTime = 100;
        this.agentDirChangePercentage = 0.25;

        this.gridTotal = 0;

        this.init = function(options) {
            // Inits a clean grid with a randomized agent placement and options reset
            this.grid = [];
            this.border = [];
            this.width = options.width;
            this.height = options.height;
            
            this.agentMaxRunTime = options.agentMaxRunTime;
            this.agentDirChangePercentage = options.agentDirChangePercentage;

            this.gridTotal = this.width * this.height;

            for(var x = 0; x < this.width; x++) {
                for(var y = 0; y < this.height; y++) {
                    if(this.grid.length == x * this.width || this.grid.length == x * this.width + this.height - 1 || this.grid.length < this.height || (this.grid.length < this.gridTotal && this.grid.length > this.gridTotal - this.height)) {
                        this.border.push(this.grid.length);
                    }
                    this.grid.push(1);
                }
            }
        }

        this.generate = function() {
            // Starts moving the agent depending on options
            var agentStartPosition = getAgentStartPosition(this.gridTotal, this.border);
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

                if(isBorderTile(agentCurTile, this.border)) {
                    agentCurTile = agentTempTile;
                    agentDir = Math.floor(Math.random() * 4);
                }
                this.grid[agentPrevTile] = 0;
                this.grid[agentCurTile] = 2;

                agentDirChangePercentage = Math.random();
                if(agentDirChangePercentage > this.agentDirChangePercentage) {
                    agentDir = Math.floor(Math.random() * 4);
                }

                agentRunTime++;
            }
        }

        this.render = function() {
            // Renders the canvas depending on the grid
            var tile = -1;
            for(var x = 0; x < this.width; x++) {
                for(var y = 0; y < this.height; y++) {
                    tile++;
                    this.ctx.fillStyle="#000000";
                    if(this.grid[tile] == 1) {
                        this.ctx.fillRect(x * 16, y * 16, 16, 16);
                    }
                    else if(this.grid[tile] == 2) {
                        this.ctx.fillStyle="#FF0000";
                        this.ctx.fillRect(x * 16, y * 16, 16, 16);
                    }
                }
            }
        }

        function isBorderTile(tile, border) {
            if(border == []) {return false;}

            for(var i = 0; i < border.length; i++) {
                if(border[i] == tile) {
                    return true;
                }
            }
            return false;
        }

        function getAgentStartPosition(gridTotal, border) {
            var startPosition = Math.floor(Math.random() * (gridTotal - 1));
            while(isBorderTile(startPosition, border)) {
                startPosition = Math.floor(Math.random() * (gridTotal - 1));
            }
            return startPosition;
        }

    }
}