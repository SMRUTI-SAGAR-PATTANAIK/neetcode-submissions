class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let totalRotations = 0;
        while(sandwiches.length) {
            if(students[0] === sandwiches[0]) {
                students.shift();
                sandwiches.shift();
                totalRotations = 0;
            }
            else {
                let s = students.shift();
                students.push(s);
                totalRotations++;
                if(totalRotations === students.length) {
                    return students.length;
                }
            }
        }
        return students.length;
    }
}
