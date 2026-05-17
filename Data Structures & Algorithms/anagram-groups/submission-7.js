class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for(let s of strs) {
            const arr = new Array(26).fill(0)
            for (let c of s) {
                arr[c.charCodeAt(0)-'a'.charCodeAt(0)] += 1
                console.log(c.charCodeAt(0)-'a'.charCodeAt(0))
            }

            const touple = arr.join(',')
            console.log(touple, arr)
            if(!res[touple]) {
                res[touple] = []
            }

            res[touple].push(s)
        }

        return Object.values(res)
    }
}
