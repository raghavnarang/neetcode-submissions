/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const map = new Map()
        for(const i of intervals) {
            map.set(i.start, (map.get(i.start)||0) + 1)
            map.set(i.end, (map.get(i.end)||0) - 1)
        }

        const keys = Array.from(map.keys()).sort((a,b)=>a-b)
        let prev = 0
        let res=0
        for(const key of keys) {
            prev += map.get(key)
            res = Math.max(res, prev)
        }

        return res
    }
}
