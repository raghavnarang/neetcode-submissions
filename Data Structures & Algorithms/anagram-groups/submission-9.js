class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const s of strs) {
            const arr = new Array(26).fill(0)
            for(const c of s) {
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const touple = arr.join(',')
            if(!map.has(touple)) {
                map.set(touple, [])
            }

            map.get(touple).push(s)
        }

        return [...map.values()]
    }
}
