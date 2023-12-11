let indexpagedata = {};

function initLoad() {
  createContent();
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
  document.getElementById("index-title").textContent = indexpagedata[language + 'Header'];
  document.getElementById("sustainability-title").textContent = indexpagedata[language + 'Title'];
  document.getElementById("index-content").textContent = indexpagedata[language + 'Text'];
  document.getElementById("sustainability-motto").textContent = indexpagedata[language + 'Motto'];

}

function createContent(){

  // get header
  const header = document.querySelector("header");

  // get container class
  const container = document.querySelector(".container");

  // create new stuff
  const indexTitle = document.createElement("h1");
  indexTitle.id = "index-title";

  // header title added
  header.append(indexTitle);

  // container content

  // create h1 element 
  const sustainabilityTitle = document.createElement("h1");
  sustainabilityTitle.id = "sustainability-title";

  const content = document.createElement("p");
  content.id = "index-content";

  const motto = document.createElement("h1");
  motto.id = "sustainability-motto"

  container.append(sustainabilityTitle);
  container.append(content);
  container.append(motto);
  
}

function onClickLang(UserOptions) {
  if (UserOptions === 'ENGLISH' || UserOptions === 'FRENCH') {
    updateContent(UserOptions.toLowerCase());
  } else {
    console.error('Invalid language option');
  }
}

initLoad();
