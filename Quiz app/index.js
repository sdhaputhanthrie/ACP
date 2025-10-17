function submit(){
  var name = document.getElementById('username').value;
  localStorage.setItem("studentName", name);
  window.location.href = "question1.html";
}


const name = localStorage.getItem("studentName");
if(name){
    document.getElementById("display").innerText =  name;
}

const questions = [
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["String", "Integer", "Float", "Character", "All of the above"],
    correct: "String"
  },
  {
    question: "Which method is used to print content in the console?",
    options: ["print()", "console.log()", "display()", "write()", "log.print()"],
    correct: "console.log()"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "char", "float"],
    correct: "var"
  },
  {
  question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Tool Main Language",
      "Hyper Transfer Markup Language"],
      correct: "Hyper Text Markup Language"
    },
    {
    question: "Which method displays an alert box in JavaScript?",
    options: ["alert()", "prompt()", "show()", "display()", "message()"],
    correct: "alert()"
  }
];

let currentQuestion = 0;
let timer;
let time= 60;
let score = 0;

function  displayQuestion(){
    const quiz = questions[currentQuestion];
    document.getElementById("question").innerText = quiz.question;
    document.querySelector(".index").innerText = currentQuestion + 1;
    
    let option = document.getElementById("options");
    option.innerHTML = "";

    for (let i = 0; i < quiz.options.length; i++) {
    option.innerHTML += `
      <div>
        <input type="radio" name="ans" value="${quiz.options[i]}">
        ${quiz.options[i]}
      </div>
    `;
  }
startCount(); 
}

function startCount(){
   clearInterval(timer);
  time = 60;
  const timerBox = document.getElementById("timer");
   updateTimerDisplay(timerBox); 

  timer = setInterval(() => {
    time--;
    updateTimerDisplay(timerBox);

    if (time <= 0) {
      clearInterval(timer);
      nextPage();
    }
  }, 1000);
}

function updateTimerDisplay(timerBox) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  
     timerBox.innerText =
    (minutes < 10 ? "0" + minutes : minutes) + ":" + 
    (seconds < 10 ? "0" + seconds : seconds);
 
}

function submitAnswer() {
  const selected = document.querySelector('input[name="ans"]:checked');
  if (!selected) {
    return;
  }
  const userAnswer = selected.value;
  const correctAnswer = questions[currentQuestion].correct;

  const feedback = document.getElementById("feedback") || (() => {
    const div = document.createElement("div");
    div.id = "feedback";
    div.style.marginTop = "10px";
    div.style.fontWeight = "bold";
    div.style.fontSize = "18px";
    document.getElementById("options").appendChild(div);
    return div;
  })();

  if (userAnswer === correctAnswer) {
   feedback.innerText = "Answer is correct";
    feedback.style.color = "black";
    score++;

  } else {
    feedback.innerText = `wrong answer! Correct answer: ${correctAnswer}`;
    feedback.style.color = "black";
  }

  clearInterval(timer);
  setTimeout(nextPage, 3000);
}


function nextPage() {
  currentQuestion++;
  const feedbackDiv = document.getElementById("feedback");
  if (feedbackDiv) feedbackDiv.remove();
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    document.getElementById("question").innerText = ` Quiz Finished!Score: ${score}/${questions.length}`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("timer").innerText = "";
  }
}

window.onload = displayQuestion;



