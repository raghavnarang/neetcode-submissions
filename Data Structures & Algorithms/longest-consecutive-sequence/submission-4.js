class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) {
            return 0;
        }

        const sorted = [...new Set(nums)].sort((a, b) => a - b)
        console.log(sorted)
        const buckets = Array.from({length:sorted.length+1}, ()=>false)
        let currentChainCount = 1
        for (let i =1; i<sorted.length; i++) {
            if(sorted[i] - sorted[i-1] === 1){
                currentChainCount++;
            } else if (currentChainCount > 0) {
                buckets[currentChainCount] = true
                currentChainCount = 1
            }
        }

        if (currentChainCount > 0) {
            buckets[currentChainCount] = true
        }

        for (let i =buckets.length-1; i>0; i--) {
            if(buckets[i]) {
                return i
            }
        }

        return 1
    }
}
