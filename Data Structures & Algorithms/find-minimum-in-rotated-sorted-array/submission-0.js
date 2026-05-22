class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [4,66,68,69,1,2,3]
    findMin(nums) {
        for(let i = 1; i< nums.length; i++) {
            if(nums[i]<nums[i-1]) {
                return nums[i]
            }
        }

        return nums[0]
    }
}
