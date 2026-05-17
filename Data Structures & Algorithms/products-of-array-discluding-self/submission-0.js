class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [1]
        for(let i =1; i<nums.length; i++) {
            res[i] = res[i-1] * nums[i-1]
        }

        let suffix = 1
        for(let i = nums.length-2; i >= 0; i--) {
            suffix *= nums[i+1]
            res[i] *= suffix
        }

        return res
    }
}
