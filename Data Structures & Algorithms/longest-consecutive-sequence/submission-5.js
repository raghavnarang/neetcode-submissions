class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) {
            return 0;
        }

        let currentChain = 1
        let maxChain = 1
        const sorted = [...new Set(nums)].sort((a, b) => a - b)
        for (let i =1; i<sorted.length; i++) {
            if(sorted[i] - sorted[i-1] === 1){
                currentChain++;
            } else {
                currentChain = 1
            }
            maxChain = Math.max(maxChain, currentChain)
        }

        return maxChain
    }
}
