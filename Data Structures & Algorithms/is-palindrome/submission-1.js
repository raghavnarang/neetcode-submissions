class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let l = 0;
        let r = s.length-1
        const isAlnum = c => /[a-z0-9]/.test(c);
        while(l<r){
            while(l<r & !isAlnum(s[l])) {
                l++
            }

            while(l<r & !isAlnum(s[r])) {
                r--
            }

            if(s[l]!==s[r]) {
                return false
            }

            l++;
            r--;
        }

        return true;
    }
}
