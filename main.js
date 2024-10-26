const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const civQuesBtn = document.getElementById("civQuesBtn");
const civAnsBtn = document.getElementById("civAnsBtn");

const civQuesBank = [
    ["Which ancient civilization developed the first system of writing?", "Sumerians"],
    ["Who was the founder of Buddhism?", "Siddhartha Gautama"],
    ["What was the Silk Road?", "A network of trade routes connecting the East and West"],
    ["What empire was ruled by Julius Caesar and Augustus?", "Roman Empire"],
    ["Which Chinese dynasty is known for the construction of the Great Wall?", "Qin Dynasty"],
]

civQuesBankLength = civQuesBank.length
// console.log(civQuesBankLength);

let randomCivNum = Math.floor(Math.random() * civQuesBankLength);
console.log(randomCivNum);

let randomCivQA = civQuesBank[randomCivNum];
console.log(randomCivQA);

let randomCivQues = randomCivQA[0, 0];
console.log(randomCivQues);

let randomCivAns = randomCivQA[0, 1];
console.log(randomCivAns);


function flashCivQues(){
    // console.log("you clicked the question button");
    questionDisplay.innerText = randomCivQues;

    
}

function flashCivAns(){
    // console.log("you clicked the answer button");
    answerDisplay.innerText = randomCivAns;
}