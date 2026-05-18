class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clearS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const half = Math.floor(clearS.length/2)
        for(let i = 0; i<half; i++) {
            if(clearS[i]!==clearS[clearS.length-i-1]) {
                return false
            }
        }
        return true
    }
}
