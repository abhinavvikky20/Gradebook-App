/*function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum/ scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
*/

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}


function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score > 89) {
    return "A";
  }else if (score > 79) {
    return "B";
  }else if (score > 69) {
    return "C";
  }else if (score > 59) {
    return "D";
  }else{
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
} 

function studentMsg(totalScores, studentScore) {
  let passFail
  if (hasPassingGrade(studentScore)) {
    passFail = "You passed the course."
  } else {
    passFail = "You failed the course."
  }
  return "Class average: " +  getAverage( totalScores) + ". Your grade: " + getGrade
  (studentScore) + ". " + passFail;
}

console.log(studentMsg[92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));
/*console.log(getGrade(100));
console.log(getGrade(82));
console.log(getGrade(56));*/