const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const histQuesBtn = document.getElementById("histQuesBtn");
const histAnsBtn = document.getElementById("histAnsBtn");

const histQuesBank = [
    ["Which ancient civilization developed the first system of writing?", "Sumerians"],
    ["Who was the founder of Buddhism?", "Siddhartha Gautama"],
    ["What was the Silk Road?", "A network of trade routes connecting the East and West"],
    ["What empire was ruled by Julius Caesar and Augustus?", "Roman Empire"],
    ["Which Chinese dynasty is known for the construction of the Great Wall?", "Qin Dynasty"],
    ["Who was Mansa Musa and why is he significant?", "Mansa Musa was the ruler of the Mali Empire and known for his pilgrimage to Mecca, showcasing Mali's wealth."],
    ["What was the significance of the Battle of Marathon?", "A decisive Greek victory over the Persians during the Persian Wars"],
    ["Who wrote 'The Prince' and what was its main theme?", "Niccolò Machiavelli; the main theme is political realism and advice for rulers"],
    ["What was the primary motivation for European exploration in the 15th century?", "Desire for new trade routes and resources"],
    ["What was the Columbian Exchange?", "The exchange of goods, ideas, and diseases between the Old World and the New World"],
    ["What was the impact of the Black Death on Europe in the 14th century?", "Significant population decline and social upheaval"],
    ["Who was Zheng He and what was his contribution to Chinese history?", "A Chinese explorer who led seven voyages during the Ming Dynasty, expanding Chinese influence"],
    ["What was the Industrial Revolution and where did it begin?", "A period of economic and technological change; it began in England"],
    ["What was the significance of the Haitian Revolution?", "First successful slave revolt leading to the establishment of the independent state of Haiti"],
    ["Who were the main leaders of the Mexican Revolution?", "Emiliano Zapata and Pancho Villa"],
    ["What was the 'White Man's Burden' and who popularized this concept?", "The idea that Europeans had a moral responsibility to civilize other cultures; popularized by Rudyard Kipling"],
    ["What was the main cause of World War I?", "Assassination of Archduke Franz Ferdinand of Austria-Hungary"],
    ["What was the Treaty of Versailles and how did it impact Germany?", "The peace treaty that ended World War I; it imposed harsh penalties on Germany, contributing to economic and political instability"],
    ["What were the main causes of the Russian Revolution of 1917?", "Social inequality, economic hardship, and the impact of World War I"],
    ["Who were the major leaders of the Allied Powers during World War II?", "Winston Churchill, Franklin D. Roosevelt, Joseph Stalin"],
    ["What was the Holocaust and how did it impact Jewish communities?", "Systematic genocide of six million Jews by the Nazis during World War II; led to profound and lasting effects on Jewish communities worldwide"],
    ["What was the Cold War and what were its main characteristics?", "A geopolitical tension between the United States and the Soviet Union, characterized by ideological and political rivalry"],
    ["What was apartheid and in which country did it occur?", "A system of racial segregation in South Africa"],
    ["What was the Green Revolution and how did it impact agriculture?", "Introduction of new technologies and crop varieties, leading to increased agricultural productivity"],
    ["What were the causes and consequences of the Iranian Revolution in 1979?", "Causes included dissatisfaction with the Shah's regime; consequences included the establishment of an Islamic Republic"],
    ["Who was Nelson Mandela and what role did he play in South Africa's history?", "Anti-apartheid activist and the first black president of South Africa, promoting reconciliation and unity"],
    ["What was the Rwandan Genocide and what were its root causes?", "Ethnic violence resulting in the mass killing of Tutsis by Hutus; root causes included historical tensions and political manipulation"],
    ["What is globalization and how has it affected economies and cultures?", "The increasing interconnectedness of the world; it has led to economic interdependence and cultural exchange"],
    ["What is the significance of the United Nations in global affairs?", "An international organization aimed at maintaining peace and cooperation among nations"],
    ["What is the concept of 'total war' and how did it manifest during the 20th century?", "A conflict involving all aspects of a society; manifested in both World Wars with widespread mobilization and civilian involvement"]
]


function flashHistQues(){
    histQuesBankLength = histQuesBank.length
    // console.log(histQuesBankLength);

    let randomHistNum = Math.floor(Math.random() * histQuesBankLength);
    console.log(randomHistNum);

    let randomHistQA = histQuesBank[randomHistNum];
    console.log(randomHistQA);

    let randomHistQues = randomHistQA[0, 0];
    console.log(randomHistQues);

    globalThis.randomHistAns = randomHistQA[0, 1];
    console.log(randomHistAns);
    // console.log("you clicked the question button");
    questionContent = randomHistQues;
    questionDisplay.innerText = questionContent;
    answerDisplay.innerText = "";
}

function flashHistAns(){
    // console.log("you clicked the answer button");
    answerContent = randomHistAns;
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