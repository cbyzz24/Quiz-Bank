const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const spanQuesBtn = document.getElementById("spanQuesBtn");
const spanAnsBtn = document.getElementById("spanAnsBtn");

const spanQuesBank =[
    ["house", "casa"],
    ["water", "agua"],
    ["food", "comida"],
    ["school", "escuela"],
    ["car", "coche"],
    ["book", "libro"],
    ["dog", "perro"],
    ["cat", "gato"],
    ["sun", "sol"],
    ["moon", "luna"],
    ["star", "estrella"],
    ["tree", "árbol"],
    ["flower", "flor"],
    ["bird", "pájaro"],
    ["friend", "amigo"],
    ["family", "familia"],
    ["child", "niño"],
    ["baby", "bebé"],
    ["man", "hombre"],
    ["woman", "mujer"],
    ["brother", "hermano"],
    ["sister", "hermana"],
    ["father", "padre"],
    ["mother", "madre"],
    ["day", "día"],
    ["night", "noche"],
    ["morning", "mañana"],
    ["afternoon", "tarde"],
    ["evening", "noche"],
    ["week", "semana"],
    ["month", "mes"],
    ["year", "año"],
    ["time", "tiempo"],
    ["door", "puerta"],
    ["window", "ventana"],
    ["table", "mesa"],
    ["chair", "silla"],
    ["bed", "cama"],
    ["kitchen", "cocina"],
    ["bathroom", "baño"],
    ["shirt", "camisa"],
    ["pants", "pantalones"],
    ["shoes", "zapatos"],
    ["hat", "sombrero"],
    ["red", "rojo"],
    ["blue", "azul"],
    ["green", "verde"],
    ["black", "negro"],
    ["white", "blanco"],
    ["look at or watch tv (watch tv)", "mirar"],
    ["I look at", "yo miro"],
    ["you look at", "tú miras"],
    ["s/he looks at", "ella/él mira"],
    ["you (formal) look at", "usted mira"],
    ["we look at", "nosotros miramos"],
    ["they look at", "ellas/ellos miran"],
    ["yall look at", "ustedes miran"],
    ["to have", "tener"],
    ["I have", "yo tengo"],
    ["you have", "tú tienes"],
    ["s/he has", "ella/él tiene"],
    ["you (formal) have", "Ud. tiene"],
    ["we have", "nosotros tenemos"],
    ["they have", "ellas/ellos tienen"],
    ["yall have", "Uds. tienen"],
    ["to have fear", "tener miedo"],
    ["I have fear", "yo tengo miedo"],
    ["you have fear", "tú tienes miedo"],
    ["s/he has fear", "ella/él tiene miedo"],
    ["you (formal) have fear", "Ud. tiene miedo"],
    ["we have fear", "nosotros tenemos miedo"],
    ["they have fear", "ellas/ellos tienen miedo"],
    ["yall have fear", "Uds. tienen miedo"],
    ["toward", "hacia"],
    ["fear", "miedo"],
    ["of", "de"]
];



function flashSpanQues(){
    spanQuesBankLength = spanQuesBank.length
    // console.log(spanQuesBankLength);

    let randomSpanNum = Math.floor(Math.random() * spanQuesBankLength);
    console.log(randomSpanNum);

    let randomSpanQA = spanQuesBank[randomSpanNum];
    console.log(randomSpanQA);

    let randomSpanQues = randomSpanQA[0, 0];
    console.log(randomSpanQues);

    globalThis.randomSpanAns = randomSpanQA[0, 1];
    console.log(randomSpanAns);
    // console.log("you clicked the question button");
    questionContent = randomSpanQues;
    questionDisplay.innerText = questionContent;
    answerDisplay.innerText = "";
}

function flashSpanAns(){
    // console.log("you clicked the answer button");
    answerContent = randomSpanAns;
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