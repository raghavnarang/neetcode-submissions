class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
                stack.push(s[i])
            }

            if(s[i] === ']' && stack.pop() !== "[") {
                return false;
            }

            if(s[i] === '}' && stack.pop() !== "{") {
                return false;
            }

            if(s[i] === ')' && stack.pop() !== "(") {
                return false;
            }
        }

        return stack.length === 0
    }
}
