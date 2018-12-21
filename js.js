$(document).ready;

function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer % 60, 10);

      display.textContent = "00" + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
          timer = false;
          $("#quizContainer").hide();
          
          


    }
  },1000);
}

$("#quizContainer").hide();

$("#startButton").one("click",function timer() {
  var timeLeft = 60,
      display = document.querySelector('#countdownClock');
      startTimer(timeLeft, display);
      this.style.visibility = "hidden";
      $("#quizContainer").show();
});

var q = document.getElementById("quizContainer");
var results = document.getElementById('results');
var submitButton = document.getElementById('submitButton');

var questions = [{
  question : "Is Jakarta the capital of Indonesia?",
  answers : {
    a : "True",
    b : "False"
  },
  correctAnswer : "a"
},
{
  question : "Indonesia consists of more than 15,000 islands",
  answers : {
    a : "True",
    b : "False",
  },
  correctAnswer : "a"
},
{
  question : "Is Chinese the common language spoken in Indonesia?",
  answers : {
    a : "True",
    b : "False"
  },
  correctAnswer : "b"
},
{
  question : "Is Palm Oil the #1 export of Indonesia?",
  answers : {
    a : "True",
    b : "False"
  },
  correctAnswer : "a"
},
{
  question : "Is 430 Million the approximate population of Indonesia?",
  answers : {
    a: "True",
    b: "False"
  },
  correctAnswer : "b"
},
{
  question : "Is the Komodo Dragon the national animal for Indonesia?",
  answers : {
    a: "True",
    b: "False"
  },
  correctAnswer : "a"
},
{
  question : "Indonesia is located in the Asia continent",
  answers : {
    a: "True",
    b: "Fase"
  },
  correctAnswer : "a"
},
{
  question : "Are Green & Red the flag colors of Indonesia",
  answers : {
    a: "True",
    b: "False"
  },
  correctAnswer : "b"
},
{
  question : "Is Indonesia the largest Islamic country in the world?",
  answers : {
    a: "True",
    b: "False"
  },
  correctAnswer : "a"
},
{
  question : "Did Indonesia declare Independence in 1954?",
  answers : {
    a: "True",
    b: "False"
  },
  correctAnswer : "a"
}];

function quiz(){
  var output = [];
  questions.forEach(
    
    (currentQuestion, questionNumber) => {
      var answers = [];

      for(letter in currentQuestion.answers){
        answers.push(


          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`

        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  q.innerHTML = output.join('');
}

function showResults(){
  var answerContainers = q.querySelectorAll('.answers');
  var numCorrect = 0;

  questions.forEach( (currentQuestion, questionNumber) => {


    var answerContainer = answerContainers[questionNumber];
    var selector = 'input[name=question'+questionNumber+']:checked';


    var userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(userAnswer===currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.fontWeight = 'bold';
    }
  });
  submitButton.addEventListener("click", showResults);

}

quiz();
showResults();

// var questions = [
//   "1. What is the capitol of Indonesia?",
//   "2. Approximately how many islands does Indonesia consist of?",
//   "3. What is the most wnameely spoken language of Indonesia?",
//   "4. What is the #1 export of Indonesia?",
//   "5. What is the approximate population of Indonesia?",
//   "6. What is the national animal of Indonesia?",
//   "7. In what continant is Indonesia located?",
//   "8. What colors are the Indonesian national flag?",
//   "9. What is the most practiced religon in Indonesia?",
//   "10. What year name Indonesia declare independance?"
// ];

// var answers = [
//   "option 1",
//   "option 2",
//   "option 3",
//   "option 4"
// ];

// clearInterval(seconds);

// function displayQuestions() {
//     var firstQuestion = ""
//     if(firstQuestion == correctAnswer[0]) {
//   }
// }


// $("submitButton").click(function() {
  
// });
// $("")


