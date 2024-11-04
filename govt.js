const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const govtQuesBtn = document.getElementById("govtQuesBtn");
const govtAnsBtn = document.getElementById("govtAnsBtn");

const govtQuesBank = [
    ["What are the two major political parties in the United States?", "The Democratic Party and the Republican Party"],
    ["What is the primary responsibility of the Legislative Branch?", "To create and pass laws"],
    ["Who is the Speaker of the House?", "The elected leader of the U.S. House of Representatives"],
    ["How often are U.S. presidential elections held?", "Every four years"],
    ["What is the purpose of the U.S. Senate?", "To represent the states and vote on legislation"],
    ["Who has the power to veto a bill passed by Congress?", "The President"],
    ["How many justices typically serve on the U.S. Supreme Court?", "Nine justices"],
    ["What is a filibuster?", "A tactic used in the Senate to delay or block a vote on a bill"],
    ["How many electoral votes are needed to win the U.S. presidency?", "270 electoral votes"],
    ["What is the minimum age requirement to run for President of the United States?", "35 years old"],
    ["Who becomes President if both the President and Vice President can no longer serve?", "The Speaker of the House"],
    ["What is the term length for a U.S. Representative?", "2 years"],
    ["What is the term length for a U.S. Supreme Court Justice?", "Lifetime appointment, unless they resign, retire, or are removed"],
    ["What does the Secretary of State do?", "Handles foreign affairs and relations for the U.S."],
    ["What is the purpose of a political primary election?", "To choose a party's candidate for the general election"],
    ["Who appoints U.S. Supreme Court Justices?", "The President, with confirmation by the Senate"],
    ["What is the role of the Vice President in the Senate?", "To serve as the President of the Senate and cast tie-breaking votes"],
    ["What does the Federal Reserve do?", "Regulates the U.S. monetary system and controls interest rates"],
    ["Who represents a U.S. state in the Senate?", "Two Senators per state"],
    ["What is a swing state?", "A state where both major political parties have similar levels of support, making it key in elections"]
];



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

function showSidebar(){
    const sidebar =document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function closeSidebar(){
    const sidebar =document.querySelector(".sidebar")
    sidebar.style.display = "none"
}