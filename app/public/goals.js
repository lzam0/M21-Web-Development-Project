
var goalpagedata;

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

function initloadGoal1()
{
    var goalpagedata2;

fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();
})
.then(data => {
   goalpagedata2 = data;
   document.getElementById("GoalQuestion").textContent=goalpagedata2.goal1page.englishGoalQuestion;
   document.getElementById("GoalAnswer").textContent=goalpagedata2.goal1page.englishGoalAnswer;
   document.getElementById("GoalWhy").textContent=goalpagedata2.goal1page.englishGoalWhy;
   document.getElementById("GoalWhyResponse").textContent=goalpagedata2.goal1page.englishGoalWhyResponse;
   document.getElementById("GoalSolution").textContent=goalpagedata2.goal1page.englishGoalSolution;
   document.getElementById("GoalSolutionResponse").textContent=goalpagedata2.goal1page.englishGoalSolutionResponse;
   document.getElementById("IntroLink").textContent=goalpagedata2.goal1page.englishIntroLink;
    })
    }

    function onClickLangGoal1(UserOptions) { 

        if(UserOptions == 'ENGLISH'){
         
          fetch("http://localhost:3000/language.json")
          .then((res) => {
          return res.json();
        })
        .then(data => {
          goalpagedata = data;
         
         
          document.getElementById("GoalQuestion").textContent=goalpagedata.goal1page.englishGoalQuestion;
          document.getElementById("GoalAnswer").textContent=goalpagedata.goal1page.englishGoalAnswer;
          document.getElementById("GoalWhy").textContent=goalpagedata.goal1page.englishGoalWhy;
          document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal1page.englishGoalWhyResponse;
          document.getElementById("GoalSolution").textContent=goalpagedata.goal1page.englishGoalSolution;
          document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal1page.englishGoalSolutionResponse;
      })}
         
        if(UserOptions == 'FRENCH'){
           fetch("http://localhost:3000/language.json")
          .then((res) => {
          return res.json();
        })
        .then(data => {
          goalpagedata = data;
          document.getElementById("GoalQuestion").textContent=goalpagedata.goal1page.frenchGoalQuestion;
          document.getElementById("GoalAnswer").textContent=goalpagedata.goal1page.frenchGoalAnswer;
          document.getElementById("GoalWhy").textContent=goalpagedata.goal1page.frenchGoalWhy;
          document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal1page.frenchGoalWhyResponse;
          document.getElementById("GoalSolution").textContent=goalpagedata.goal1page.frenchGoalSolution;
          document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal1page.frenchGoalSolutionResponse;
          document.getElementById("IntroLink").textContent=goalpagedata.goal1page.frenchIntroLink;
         
      })}
      
      }


// From here its for Goal4 page

function initloadGoal4()
{
    var goalpagedata4;

fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();
})
.then(data => {
   goalpagedata4 = data;
   //alert(goalpagedata2.goal1page.englishGoalInformation);
   document.getElementById("GoalQuestion").textContent=goalpagedata4.goal4page.englishGoalQuestion;
   document.getElementById("GoalAnswer").textContent=goalpagedata4.goal4page.englishGoalAnswer;
   document.getElementById("GoalWhy").textContent=goalpagedata4.goal4page.englishGoalWhy;
   document.getElementById("GoalWhyResponse").textContent=goalpagedata4.goal4page.englishGoalWhyResponse;
   document.getElementById("GoalSolution").textContent=goalpagedata4.goal4page.englishGoalSolution;
   document.getElementById("GoalSolutionResponse").textContent=goalpagedata4.goal4page.englishGoalSolutionResponse;
   document.getElementById("IntroLink").textContent=goalpagedata4.goal4page.englishIntroLink;
})
    }

    function onClickLangGoal4(UserOptions) { 

        if(UserOptions == 'ENGLISH'){
         
          fetch("http://localhost:3000/language.json")
          .then((res) => {
          return res.json();
        })
        .then(data => {
          goalpagedata = data;
         
         
          document.getElementById("GoalQuestion").textContent=goalpagedata.goal4page.englishGoalQuestion;
          document.getElementById("GoalAnswer").textContent=goalpagedata.goal4page.englishGoalAnswer;
          document.getElementById("GoalWhy").textContent=goalpagedata.goal4page.englishGoalWhy;
          document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal4page.englishGoalWhyResponse;
          document.getElementById("GoalSolution").textContent=goalpagedata.goal4page.englishGoalSolution;
          document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal4page.englishGoalSolutionResponse;
      })}
         
        if(UserOptions == 'FRENCH'){
           fetch("http://localhost:3000/language.json")
          .then((res) => {
          return res.json();
        })
        .then(data => {
          goalpagedata = data;
          document.getElementById("GoalQuestion").textContent=goalpagedata.goal4page.frenchGoalQuestion;
          document.getElementById("GoalAnswer").textContent=goalpagedata.goal4page.frenchGoalAnswer;
          document.getElementById("GoalWhy").textContent=goalpagedata.goal4page.frenchGoalWhy;
          document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal4page.frenchGoalWhyResponse;
          document.getElementById("GoalSolution").textContent=goalpagedata.goal4page.frenchGoalSolution;
          document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal4page.frenchGoalSolutionResponse;
          document.getElementById("IntroLink").textContent=goalpagedata.goal4page.frenchIntroLink;
         
      })}
      
      }


// From here its for Goal6 page

function initloadGoal6()
{
    var goalpagedata6;
    

fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();
})
.then(data => {
   goalpagedata6 = data;
   //alert(goalpagedata2.goal1page.englishGoalInformation);
   document.getElementById("GoalQuestion").textContent=goalpagedata6.goal6page.englishGoalQuestion;
   document.getElementById("GoalAnswer").textContent=goalpagedata6.goal6page.englishGoalAnswer;
   document.getElementById("GoalWhy").textContent=goalpagedata6.goal6page.englishGoalWhy;
   document.getElementById("GoalWhyResponse").textContent=goalpagedata6.goal6page.englishGoalWhyResponse;
   document.getElementById("GoalSolution").textContent=goalpagedata6.goal6page.englishGoalSolution;
   document.getElementById("GoalSolutionResponse").textContent=goalpagedata6.goal6page.englishGoalSolutionResponse;
   document.getElementById("IntroLink").textContent=goalpagedata6.goal6page.englishIntroLink;
})
    }

    function onClickLangGoal6(UserOptions) { 

        if(UserOptions == 'ENGLISH'){
         
          fetch("http://localhost:3000/language.json")
          .then((res) => {
          return res.json();
        })
        .then(data => {
          goalpagedata = data;
         
         
          document.getElementById("GoalQuestion").textContent=goalpagedata.goal6page.englishGoalQuestion;
          document.getElementById("GoalAnswer").textContent=goalpagedata.goal6page.englishGoalAnswer;
          document.getElementById("GoalWhy").textContent=goalpagedata.goal6page.englishGoalWhy;
          document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal6page.englishGoalWhyResponse;
          document.getElementById("GoalSolution").textContent=goalpagedata.goal6page.englishGoalSolution;
          document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal6page.englishGoalSolutionResponse;
      })}
         
        if(UserOptions == 'FRENCH'){
           fetch("http://localhost:3000/language.json")
          .then((res) => {
          return res.json();
        })
        .then(data => {
          goalpagedata = data;
          document.getElementById("GoalQuestion").textContent=goalpagedata.goal6page.frenchGoalQuestion;
          document.getElementById("GoalAnswer").textContent=goalpagedata.goal6page.frenchGoalAnswer;
          document.getElementById("GoalWhy").textContent=goalpagedata.goal6page.frenchGoalWhy;
          document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal6page.frenchGoalWhyResponse;
          document.getElementById("GoalSolution").textContent=goalpagedata.goal6page.frenchGoalSolution;
          document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal6page.frenchGoalSolutionResponse;
          document.getElementById("IntroLink").textContent=goalpagedata.goal6page.frenchIntroLink;
         
      })}
      
      }