

function calculateGrade () {
  let numberGrade = document.getElementById("numberGrade").value;
  let letterGrade = document.getElementById("letterGrade");

  if (numberGrade > 90 && numberGrade < 100) {
    letterGrade.innerHTML = 'Grade: A';
  } else if(numberGrade > 80 && numberGrade < 90) {
    letterGrade.innerHTML = 'Grade: B';
  }
  else if(numberGrade > 70 && numberGrade < 80) {
    letterGrade.innerHTML = 'Grade: C';
  }
  else if(numberGrade > 60 && numberGrade < 70){
    letterGrade.innerHTML = 'Grade: D';
  } else {
    letterGrade.innerHTML = 'Grade: F';
  }
}
