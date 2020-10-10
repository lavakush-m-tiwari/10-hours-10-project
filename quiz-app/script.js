let questions = [
   {
        question: 'Who is prime minister of India?',
        a: 'Narendra Modi',
        b: 'Rahul Gandhi',
        c: 'Dr. Manmohan Singh',
        d: 'Soniya Gandhi',
        correctAnswer: 'a'
   }, {
       question: 'For which of the following disciplines is Nobel Prize awarded?',
       a: 'Physics and Chemistry',
       b: 'Physiology or medicine',
       c: 'Literature, Peace and Economics',
       d: 'All of the abvove',
       correctAnswer: 'd'
   }, {
       question: 'In which year of First World War Germany declared war on Russia and France?',
       a: '1914',
       b: '1915',
       c: '1916',
       d: '1917', 
       correctAnswer: 'a'
   }
  ]

let current = 0;
let questionText = document.getElementById('question')
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")

let button = document.getElementById("submit")

function loadQuestions(){
    //console.log(questionsId);
    questionText.innerHTML = questions[current].question;
    a.innerText = questions[current].a;
    b.innerText = questions[current].b;
    c.innerText = questions[current].c;
    d.innerText = questions[current].d;
}

loadQuestions();

button.addEventListener("click", () => {
    console.log(document.querySelector('input[name="answer"]:checked').value, questions[current].correctAnswer);
    if(document.querySelector('input[name="answer"]:checked').value != questions[current].correctAnswer) {
        alert("wrong answer");
    }
    if(current < questions.length)
        loadQuestions();
    else
        alert("quiz is over");
    current++;
});