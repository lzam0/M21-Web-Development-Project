let goalpagedata = {};

function initload()
{
    var goalpagedata1;
fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();
})
.then(data => {
    goalpagedata1 = data;
   document.getElementById("goalheader").textContent=goalpagedata1.maingoalspage.englishHeader;
   document.getElementById("goaltitle").textContent=goalpagedata1.maingoalspage.englishTitle;
   document.getElementById("goaldiscover").textContent=goalpagedata1.maingoalspage.englishDiscover;
   document.getElementById("goalimages").innerHTML="<a href='goal-1.html'><img src='./images/Goal1.png' alt='Goal 1'></a><a href='goal-4.html'><img src='./images/Goal4.png' alt='Goal 4'></a><a href='goal-6.html'><img src='./images/Goal6.png' alt='Goal 6'></a>"
    })
    }



function onClickLang(UserOptions) { 

  if(UserOptions == 'ENGLISH'){
   
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    goalpagedata = data;
   
   
   document.getElementById("goalheader").textContent=goalpagedata.maingoalspage.englishHeader;
   document.getElementById("goaltitle").textContent=goalpagedata.maingoalspage.englishTitle;
   document.getElementById("goaldiscover").textContent=goalpagedata.maingoalspage.englishDiscover;
   
})}
   
  if(UserOptions == 'FRENCH'){
     fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    goalpagedata = data;
   document.getElementById("goalheader").textContent=goalpagedata.maingoalspage.frenchHeader;
   document.getElementById("goaltitle").textContent=goalpagedata.maingoalspage.frenchTitle;
   document.getElementById("goaldiscover").textContent=goalpagedata.maingoalspage.frenchDiscover;
})}

}

// From here its for Goal1 page

// All Goal Pages

function initLoadGoal(goalNumber) {
  fetch(`http://localhost:3000/language.json`)
  .then((res) => res.json())
  .then((data) => {
      // goal + goalNumber
      goalpagedata[goalNumber] = data[`goal${goalNumber}page`];
      updateContent(goalNumber, 'english');

      console.log(goalNumber);
  })
  .catch((error) => {
      console.error('Error fetching language data:', error);
  });
}

function updateContent(goalNum, language){
  document.getElementById("goal-title").textContent = goalpagedata[goalNum][language + "Title"];
  document.getElementById("goal-header").textContent = goalpagedata[goalNum][language + "Header"];
  document.getElementById("question").textContent = goalpagedata[goalNum][language + "GoalQuestion"];
  document.getElementById("answer").textContent = goalpagedata[goalNum][language + "GoalAnswer"];
  document.getElementById("why").textContent = goalpagedata[goalNum][language + "GoalWhy"];
  document.getElementById("why-response").textContent = goalpagedata[goalNum][language + "GoalWhyResponse"];
  document.getElementById("solution").textContent = goalpagedata[goalNum][language + "GoalSolution"];
  document.getElementById("solution-response").textContent = goalpagedata[goalNum][language + "GoalSolutionResponse"];
  document.getElementById("goal"+goalNum+"image").innerHTML = '<img src="http://localhost:3000/images/Goal' + goalNum + '.png">';
}

function onClickLangGoal(goalNumber, userOptions) {
  const language = userOptions.toLowerCase();
  if (language === 'english' || language === 'french') {
      updateContent(goalNumber, language);
  } else {
      console.error('Invalid language option');
  }
}

function createContent(){
  // get header
  const header = document.querySelector("header");

  // get container class
  const container = document.querySelector(".container");

  // get information container
  const information = document.querySelector(".goal-information");

  // create new h2 tag
  const question = document.createElement("h2");
  question.id = "question";

  // create new p tag
  const answer = document.createElement("p");
  answer.id = "answer";

   // create new h2 tag
  const why = document.createElement("h2");
  why.id = "why";
  
   // create new p tag
  const whyAnswer = document.createElement("p");
  whyAnswer.id = "why-response";

   // create new h2 tag
  const solution = document.createElement("h2");
  solution.id = "solution";

   // create new p tag
  const solutionAnswer = document.createElement("p");
  solutionAnswer.id = "solution-response";
  
   // create new p tag
  const more = document.createElement("p");
  more.id = "more";

   // create new a tag
  const link = document.createElement("a");
  link.id = "link";
  link.textContent = "http://www.un.org/sustainabledevelopment";
  link.href = "http://www.un.org/sustainabledevelopment";

  // display everything on the webpage
  information.append(question);
  information.append(answer);
  information.append(why);
  information.append(whyAnswer);
  information.append(solution);
  information.append(solutionAnswer);
  information.append(more);
  information.append(link);

}
  
createContent();