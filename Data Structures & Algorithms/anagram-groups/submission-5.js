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

        const arr1 = new Array(26).fill(0)
        const arr2 = new Array(26).fill(0)
        for(let i in s) {
            arr1[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            arr2[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        return arr1.join(',') === arr2.join(',')
    }
}
