class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let map = new Map();
        for(let char of s) {
            if(map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
        for(let char of t) {
            if(map.has(char)) {
                if(map.get(char) === 0) {
                    return false;
                } else {
                    map.set(char, map.get(char) - 1);
                }
            } else return false;
        }
        return true;
    }
}
