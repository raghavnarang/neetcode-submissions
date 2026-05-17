class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for (let str of strs) {
            encoded += `${str.length}#${str}`
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const strs = []
        while (i<str.length) {
            let j = i;
            let length = ""
            while (str[j] != "#") {
                length += str[j]
                j++
            }

            i = j+1
            const stringEndIndex = i + parseInt(length)
            let theString = ""
            while(i<stringEndIndex) {
                theString += str[i]
                i++
            }

            strs.push(theString)
        }

        return strs
    }
}
