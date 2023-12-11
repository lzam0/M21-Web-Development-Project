
var teampagedata;

function initload()
{
  var teampagedata;
fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();
})
.then(data => {
teampagedata = data;
document.getElementById("team-element-header").textContent=teampagedata.teamspage.englishHeader;
document.getElementById("team-header").textContent=teampagedata.teamspage.englishTitle;
document.getElementById("team-header-content").textContent=teampagedata.teamspage.englishsubInfo;
document.getElementById("").textContent=teampagedata.teamspage.englishHeader;
})
}

function onClickLangteam(UserOptions) { 
 
  if(UserOptions == 'ENGLISH'){
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    teampagedata = data;
     
    document.getElementById("team-element-header").textContent=teampagedata.teamspage.englishHeader;
    document.getElementById("team-header").textContent=teampagedata.teamspage.englishTitle;
    document.getElementById("team-header-content").textContent=teampagedata.teamspage.englishsubInfo;
    document.getElementById("").textContent=teampagedata.teamspage.englishLeihlHeader;
  })
  
}
  if(UserOptions == 'FRENCH'){
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    teampagedata = data;
   
   document.getElementById("indexcontent").textContent=indexpagedata.indexpage.french;
   document.getElementById("sustainability-title").textContent=indexpagedata.indexpage.frenchTitle;
   document.getElementById("sustainability-motto").textContent=indexpagedata.indexpage.frenchMotto;
   document.getElementById("indexheader").textContent=indexpagedata.indexpage.frenchHeader;
  })}

}








