/**
	Create one script with an if statement.
**/

console.log('SCRIPT #3: Create one script with an if statement.');
var scoreExam1 = 100;
var scoreExam2 = 80;
var scoreExam3 = 90;
var finalScore =  (scoreExam1 + scoreExam2 + scoreExam3) / 3;

console.log(`You score is: ${finalScore}`);

if(finalScore > 60) {
	console.log("Congrats! You passed the course.");
} else {
	console.log("Sorry! You failed the course.");
}
