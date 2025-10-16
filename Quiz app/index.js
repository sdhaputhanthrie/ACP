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
  
  let display = 
    (minutes < 10 ? "0" + minutes : minutes) + ":" + 
    (seconds < 10 ? "0" + seconds : seconds);

  timerBox.innerText = display;
}

window.onload = displayQuestion;



