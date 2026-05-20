class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 1) {
            return 1
        }

        let l = 0;
        let max = 0;
        const map = new Map()
        for(let r = 0; r< s.length; r++) {
            if(map.has(s[r])) {
                l = Math.max( map.get(s[r]) + 1 ,l)
            }

            map.set(s[r], r)
            max = Math.max(max, r-l+1)
        }

        return max
    }
}
