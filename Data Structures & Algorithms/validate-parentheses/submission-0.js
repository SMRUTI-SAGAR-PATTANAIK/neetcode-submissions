class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        for(let char of s) {
            switch(char) {
                case '{':
                case '(':
                case '[': {
                    arr.push(char);
                    break;
                }
                default: {
                    let lastBracket = arr.pop();
                    if(
                        (char === '}' && lastBracket !== '{') ||
                        (char === ']' && lastBracket !== '[') ||
                        (char === ')' && lastBracket !== '(') 
                    ){
                        return false;
                    }
                    break;
                }
            }
        }
        return arr.length === 0;
    }
}
