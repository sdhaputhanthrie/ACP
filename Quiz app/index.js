function submit(){
  var name = document.getElementById('username').value;
  window.location.href = "question1.html";
}

const question = [
    "What method adds an element to the end of an array?",
    "How do you get the number of elements in an array?",  
]

const options = [
      ["push", "pop", "shift", "unshift", "concat"],
      ["size", "length", "count", "total", "indexOf"],
]

const answers = ["push", "length"]

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
   label.className = "option-label";
   label.innerHTML = `<input type="radio" name="answer" value="${opt}"> ${opt}`;

   document.getElementById('options').appendChild(label);
   }
}