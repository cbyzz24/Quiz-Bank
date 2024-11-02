const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const civQuesBtn = document.getElementById("civQuesBtn");
const civAnsBtn = document.getElementById("civAnsBtn");

const civQuesBank = [
    ["What is the supreme law of the land in the United States?", "The Constitution"],
    ["How many branches of government are there in the United States?", "Three (Executive, Legislative, Judicial)"],
    ["Who is known as the 'Father of the Constitution'?", "James Madison"],
    ["What is the minimum voting age in the United States?", "18 years old"],
    ["How many amendments are there in the United States Constitution?", "27 amendments"],
    ["What document declared the American colonies independent from Great Britain?", "The Declaration of Independence"],
    ["Who is the current Chief Justice of the United States Supreme Court?", "John G. Roberts Jr."],
    ["What is the purpose of the Bill of Rights?", "To protect individual rights and freedoms"],
    ["How many senators are there in the U.S. Senate?", "100 senators"],
    ["In what year did the United States declare its independence?", "1776"],
    ["What is the capital of the United States?", "Washington, D.C."],
    ["Who was the first President of the United States?", "George Washington"],
    ["What is the official language of the United States?", "There is no official language at the federal level."],
    ["How many members are there in the U.S. House of Representatives?", "435 members"],
    ["Who is the current Vice President of the United States?", "Kamala Harris"],
    ["What is the term length for a U.S. Senator?", "6 years"],
    ["Which amendment gave women the right to vote?", "19th Amendment"],
    ["What is the economic system of the United States?", "Mixed economy"],
    ["Who wrote the Gettysburg Address?", "Abraham Lincoln"],
    ["What is the nickname of the U.S. flag?", "The Stars and Stripes"],
    ["Who has the power to declare war in the United States?", "Congress"],
    ["What is the highest court in the United States?", "The Supreme Court"],
    ["Which ocean is on the east coast of the United States?", "Atlantic Ocean"],
    ["What is the nickname of the U.S. national anthem?", "The Star-Spangled Banner"],
    ["What are the first ten amendments to the Constitution called?", "The Bill of Rights"],
    ["Who was the main author of the Declaration of Independence?", "Thomas Jefferson"],
    ["Which President is associated with the Emancipation Proclamation?", "Abraham Lincoln"],
    ["What is the electoral college?", "A group of electors chosen to elect the President and Vice President"],
    ["What is the primary responsibility of the Executive Branch?", "To enforce and carry out laws"],
    ["What is the purpose of the Preamble to the U.S. Constitution?", "To introduce and explain the purpose of the Constitution"]
];



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

function showSidebar(){
    const sidebar =document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function closeSidebar(){
    const sidebar =document.querySelector(".sidebar")
    sidebar.style.display = "none"
}