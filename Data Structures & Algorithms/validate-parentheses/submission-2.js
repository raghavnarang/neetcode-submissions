class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {"}":"{", "]":"[",")":"("}
        const stack = []

        for (const c of s) {
            if(closeToOpen[c]) {
                if(stack.pop() !== closeToOpen[c]) {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0
    }
}
