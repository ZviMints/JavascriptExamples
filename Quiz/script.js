const questions = [
    {
       question: "What is 10 + 10?",
       options: ["0","15","20","30"] ,
       answer: "20",
       choice: ""
    },
    {
        question: "What is Zvi favoite sport?",
        options: ["Sleep","Surf","Basketball","Soccer"],
        answer: "Sleep",
        choice: ""
    }
]

let corret = 0;
let current = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[current].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    questions[current].options.forEach(option => {
    options.innerHTML += `<button class="option">${option}</button>`;
    });
    // Begin onclick event:
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            questions[current].choice = option.textContent; // Get the option text content
            if(questions[current].choice === option.textContent) corret++;
            current++; // next question   
            document.querySelector(".status").innerHTML = corret + " of " + current;  
            
            if(current >= questions.length) {
            document.querySelector("#question").style.visibility = "hidden";
            document.querySelector("#options").style.visibility = "hidden";

            document.querySelector("h1").innerHTML = "That it! Thank you!"
            }
            else
            load_question();
        };
    });
}