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

  if (userAnswer === correctAnswer) {
    console.log("Correct answer!");
  } else {
    console.log("Wrong answer!");
  }

  clearInterval(timer);
  nextPage();
}


function nextPage() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("timer").innerText = "";
  }
}

window.onload = displayQuestion;



