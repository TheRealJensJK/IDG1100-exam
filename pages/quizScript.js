function submitQuiz() {

  // get score for eatch question
  function answerScore (qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  // using answerScore function to add up the score
  var score = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5'));
  

  // function to show right awnser if wrong awnser was selected
  function correctAnswer (correctStringNo, qusestionNumber) { 
    return ("The correct answer for question #" + qusestionNumber + ": &nbsp;<strong>" +
      (document.getElementById(correctStringNo).innerHTML) + "</strong>");
    }

  // check if awnsers is right, if they are wrong print the ringht awnser
  if (answerScore('q1') === 0) {
    document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
  }
  if (answerScore('q2') === 0) {
    document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
  }
  if (answerScore('q3') === 0) {
    document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
  }
  if (answerScore('q4') === 0) {
    document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
  }
  if (answerScore('q5') === 0) {
    document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
  }

  // print the score
  var showScore = "Your Score: " + score + " / 5";
  // print "Perfect score" if all 5 questions are awnsered correctly
  if (score === 5) {
    showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
  };
  document.getElementById('userScore').innerHTML = showScore;
}