function importText(){

}


var indexpagedata;

function initload()
{
  var indexpagedata1;
fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();
})
.then(data => {
indexpagedata1 = data;
document.getElementById("indexcontent").textContent=indexpagedata1.indexpage.english;
document.getElementById("sustainability-title").textContent=indexpagedata1.indexpage.englishTitle;
document.getElementById("sustainability-motto").textContent=indexpagedata1.indexpage.englishMotto;
document.getElementById("indexheader").textContent=indexpagedata1.indexpage.englishHeader;
})
}

function onClickLang(UserOptions) { 
 
  if(UserOptions == 'ENGLISH'){
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    indexpagedata = data;
     
   document.getElementById("indexcontent").textContent=indexpagedata.indexpage.english;
   document.getElementById("sustainability-title").textContent=indexpagedata.indexpage.englishTitle;
   document.getElementById("sustainability-motto").textContent=indexpagedata.indexpage.englishMotto;
   document.getElementById("indexheader").textContent=indexpagedata.indexpage.englishHeader;
  })
  
}
  if(UserOptions == 'FRENCH'){
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    indexpagedata = data;
   
   document.getElementById("indexcontent").textContent=indexpagedata.indexpage.french;
   document.getElementById("sustainability-title").textContent=indexpagedata.indexpage.frenchTitle;
   document.getElementById("sustainability-motto").textContent=indexpagedata.indexpage.frenchMotto;
   document.getElementById("indexheader").textContent=indexpagedata.indexpage.frenchHeader;
  })}

}