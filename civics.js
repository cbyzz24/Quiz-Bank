const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const civQuesBtn = document.getElementById("civQuesBtn");
const civAnsBtn = document.getElementById("civAnsBtn");

const civQuesBank = [
    ["Question 1", "Answer 1"],
    ["Question 2", "Answer 2"],
    ["Question 3", "Answer 3"],
    ["Question 4", "Answer 4"],
    ["Question 5", "Answer 5"],
]


function flashCivQues(){
    civQuesBankLength = civQuesBank.length
    // console.log(civQuesBankLength);

    let randomCivNum = Math.floor(Math.random() * civQuesBankLength);
    console.log(randomCivNum);

    let randomCivQA = civQuesBank[randomCivNum];
    console.log(randomCivQA);

    let randomCivQues = randomCivQA[0, 0];
    console.log(randomCivQues);

    globalThis.randomCivAns = randomCivQA[0, 1];
    console.log(randomCivAns);
    // console.log("you clicked the question button");
    questionContent = randomCivQues;
    questionDisplay.innerText = questionContent;
    answerDisplay.innerText = "";
}

function flashCivAns(){
    // console.log("you clicked the answer button");
    answerContent = randomCivAns;
    answerDisplay.innerText = answerContent;
}