class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map()
        for(let s of strs) {
            const arr = new Array(26).fill(0)
            for (let c of s) {
                arr[c.charCodeAt(0)-'a'.charCodeAt(0)] += 1
            }

            const touple = arr.join(',')
            if(!res.has(touple)) {
                res.set(touple, [])
            }

            res.get(touple).push(s)
        }

        return [...res.values()]
    }
}
