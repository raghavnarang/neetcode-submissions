class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(let num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }

        const buckets = Array.from({length: nums.length + 1}, ()=>[])
        for (const [num, freq] of map) {
            buckets[freq].push(num)
        }

        const res = []
        for(let i = buckets.length - 1; i > 0; i--) {
            for (let num of buckets[i]) {
                res.push(num)
                if(res.length === k) {
                    return res
                }
            }
        }

        return res
    }
}
