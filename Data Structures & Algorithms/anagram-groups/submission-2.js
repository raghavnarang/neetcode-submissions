class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = [[strs[0]]]
        for(let i =1; i<strs.length;i++) {
            let isPlaced = false
            for(let gi=0; gi<groups.length; gi++) {
                if(this.isAnagram(strs[i], groups[gi][0])) {
                    groups[gi].push(strs[i])
                    isPlaced = true
                    break
                }
            }
            if(!isPlaced) {
                groups.push([strs[i]])
            }
        }
        return groups
    }

    isAnagram(s,t) {
        if(s.length != t.length){
            return false;
        }

        if(s===t) {
            return true
        }

        const map = new Map()
        for(let i = 0; i<s.length; i++) {
            map.set(s[i], (map.get(s[i]) ||0) +1)
            map.set(t[i], (map.get(t[i]) ||0) -1)
        }

        return map.values().every(v=>v===0)
    }
}
