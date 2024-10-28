const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const govtQuesBtn = document.getElementById("govtQuesBtn");
const govtAnsBtn = document.getElementById("govtAnsBtn");

const govtQuesBank = [
    ["Question 1", "Answer 1"],
    ["Question 2", "Answer 2"],
    ["Question 3", "Answer 3"],
    ["Question 4", "Answer 4"],
    ["Question 5", "Answer 5"],
]


function flashGovtQues(){
    govtQuesBankLength = govtQuesBank.length
    // console.log(govtQuesBankLength);

    let randomGovtNum = Math.floor(Math.random() * govtQuesBankLength);
    console.log(randomGovtNum);

    let randomGovtQA = govtQuesBank[randomGovtNum];
    console.log(randomGovtQA);

    let randomGovtQues = randomGovtQA[0, 0];
    console.log(randomGovtQues);

    globalThis.randomGovtAns = randomGovtQA[0, 1];
    console.log(randomGovtAns);
    // console.log("you clicked the question button");
    questionContent = randomGovtQues;
    questionDisplay.innerText = questionContent;
    answerDisplay.innerText = "";
}

function flashGovtAns(){
    // console.log("you clicked the answer button");
    answerContent = randomGovtAns;
    answerDisplay.innerText = answerContent;
}