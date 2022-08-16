//Function summary
/* 
function functionName(parameters){
    function body
    return
}
var returnvalue=functionName(parameters value) 
*/

function getAverage(assignment1, assignment2, assignment3) {
    const totalMarks = assignment1 + assignment2 + assignment3;
    const average = totalMarks / 3;
    return average;

}
const assignment1Marks = 58;
const assignment2Marks = 47;
const assignment3Marks = 57;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log("My average so far : ", myAverage);