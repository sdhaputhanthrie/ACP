function submit(){
  var name = document.getElementById('username').value;
  localStorage.setItem("studentName", name);
  window.location.href = "question1.html";
}


const name = localStorage.getItem("studentName");
if(name){
    document.getElementById("display").innerText = name;
}

// Quiz data
const questions = [
    "What method adds an element to the end of an array?",
    "How do you get the number of elements in an array?",  
];

const options = [
    ["push", "pop", "shift", "unshift", "concat"],
    ["size", "length", "count", "total", "indexOf"],
];

const answers = ["push", "length"];

let current = 0;
let score = 0;

function showQuestion(){
    document.getElementById('question').innerText = questions[current];

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = "";

    const currentOptions = options[current]; 
    for (let i = 0; i < currentOptions.length; i++) {
        const opt = currentOptions[i]; 
        const label = document.createElement("label");
        label.className = "option-label d-block mb-2";
        label.innerHTML = `<input type="radio" name="answer" value="${opt}"> ${opt}`;
        optionsDiv.appendChild(label);
    }
}

// Show first question immediately
showQuestion();

function submitAnswer(){
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected){
        alert("Please select an answer!");
        return;
    }

    if(selected.value === answers[current]){
        score++;
    }

    current++;
    if(current < questions.length){
        showQuestion();
    } else {
        alert("Quiz finished! Your score: " + score + "/" + questions.length);
    }
}
