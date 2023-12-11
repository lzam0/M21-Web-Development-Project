// var indexpagedata;

// function initload(){
//   var indexpagedata1;
//   fetch("http://localhost:3000/language.json")
//   .then((res) => {
//   return res.json();
//   })
//   .then(data => {
//     indexpagedata1 = data;
//     document.getElementById("indexcontent").textContent=indexpagedata1.indexpage.english;
//     document.getElementById("sustainability-title").textContent=indexpagedata1.indexpage.englishTitle;
//     document.getElementById("sustainability-motto").textContent=indexpagedata1.indexpage.englishMotto;
//     document.getElementById("indexheader").textContent=indexpagedata1.indexpage.englishHeader;
//     })
//   }

// function onClickLang(UserOptions) { 
 
//   if(UserOptions == 'ENGLISH'){
//     fetch("http://localhost:3000/language.json")
//     .then((res) => {
//     return res.json();
//   })
//   .then(data => {
//     indexpagedata = data;
     
//    document.getElementById("indexcontent").textContent=indexpagedata.indexpage.english;
//    document.getElementById("sustainability-title").textContent=indexpagedata.indexpage.englishTitle;
//    document.getElementById("sustainability-motto").textContent=indexpagedata.indexpage.englishMotto;
//    document.getElementById("indexheader").textContent=indexpagedata.indexpage.englishHeader;
//   })
  
// }
//   if(UserOptions == 'FRENCH'){
//     fetch("http://localhost:3000/language.json")
//     .then((res) => {
//     return res.json();
//   })
//   .then(data => {
//     indexpagedata = data;
   
//    document.getElementById("indexcontent").textContent=indexpagedata.indexpage.french;
//    document.getElementById("sustainability-title").textContent=indexpagedata.indexpage.frenchTitle;
//    document.getElementById("sustainability-motto").textContent=indexpagedata.indexpage.frenchMotto;
//    document.getElementById("indexheader").textContent=indexpagedata.indexpage.frenchHeader;
//   })}

// }

let indexpagedata = {};

function initLoad() {
  fetchLanguageData();
}

// run languagae.json
function fetchLanguageData() {
  fetch("http://localhost:3000/language.json")
    .then((res) => res.json())
    .then((data) => {
      indexpagedata  = data.indexpage;

      // set english as main language
      updateContent('english');
    })

    // handle any errors
    .catch((error) => {
      console.error('Error fetching language data:', error);
    });
}

function updateContent(language) {
  document.getElementById("indexheader").textContent = indexpagedata[language + 'Header'];
  document.getElementById("sustainability-title").textContent = indexpagedata[language + 'Title'];
  document.getElementById("sustainability-motto").textContent = indexpagedata[language + 'Motto'];
  document.getElementById("index-content").textContent = indexpagedata[language + 'Text'];

}

function onClickLang(UserOptions) {
  if (UserOptions === 'ENGLISH' || UserOptions === 'FRENCH') {
    updateContent(UserOptions.toLowerCase());
  } else {
    console.error('Invalid language option');
  }
}

initLoad();
