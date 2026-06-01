class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0
        for(let i = 0; i< grid.length; i++) {
            for (let j = 0; j< grid[i].length; j++) {
                if(grid[i][j] === '0') {
                    continue
                }

                islands++
                this.sinkIsland(i, j, grid)
            }
        }

        return islands
    }

    sinkIsland(i, j, grid) {
        if(grid[i][j] === '0') {
            return
        }

        grid[i][j] = '0'

        // Upper Land
        if(i-1 >= 0) {
            this.sinkIsland(i-1, j, grid)
        }

        // Bottom Land
        if(i+1 < grid.length) {
            this.sinkIsland(i+1, j, grid)
        }

        // Left Land
        if(j-1 >= 0) {
            this.sinkIsland(i, j-1, grid)
        }

        // Left Land
        if(j+1 < grid[i].length) {
            this.sinkIsland(i, j+1, grid)
        }
    }
}
