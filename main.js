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

function flashCivQues(){
    // console.log("you clicked the question button");
    questionDisplay.innerText = "Your civics question will display here.";
    
    civQuesBankLength = civQuesBank.length
    console.log(civQuesBankLength);
}

function flashCivAns(){
    // console.log("you clicked the answer button");
    answerDisplay.innerText = "Your civics answer will display here.";
}