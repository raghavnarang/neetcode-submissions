class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(const str of strs) {
            const arr = new Array(26).fill(0)
            for(let i = 0; i<str.length; i++) {
                arr[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }

            const key = arr.join(',')
            if(!map.has(key)) {
                map.set(key, [])
            }
            map.get(key).push(str)
        }

        return [...map.values()]
    }
}
