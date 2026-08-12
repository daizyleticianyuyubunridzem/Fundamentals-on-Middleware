//an arrayb of 10 students 
const studentScores = [73, 68, 70, 88, 40, 34, 55, 60, 69, 43];
let passingMark = 50;

let total = 0;
let highestScore = studentScores[0];
let lowestScore = studentScores[0];
let passedCount = 0;
let failedCount = 0; 

 
console.log("Individual Student Scores");

//looping through the array to get the total, highest, and lowest score, and passed/failed count
for (i=0; i < studentScores.length; i++){
    const currentScore = studentScores[i];

//print every score
console.log(`student ${i+1}: ${currentScore}`);

//accumalate total score
total += currentScore

//  looping to get the highest score
if (currentScore > highestScore){
    highestScore = currentScore;
   
}

//looping to get lowest score
if (currentScore < lowestScore) {
        lowestScore = currentScore;
    }

// looping to get students passed/failed
if (currentScore >= passingMark) {
        passedCount++;
    } else {
        failedCount++;
    }

}
//total average
const totalAverage = total / studentScores.length;

console.log(`Total Score: ${total}`);
console.log(`Average Score: ${totalAverage}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Students Passed: ${passedCount}`);
console.log(`Students Failed: ${failedCount}`);

