
let teampagedata = {};

function initLoad() {
  fetchLanguageData();
}

// run languagae.json
function fetchLanguageData() {
  fetch("http://localhost:3000/language.json")
    .then((res) => res.json())
    .then((data) => {
      teampagedata = data.teamspage;

      // set english as main language
      updateContent('english');
    })

    // handle any errors
    .catch((error) => {
      console.error('Error fetching language data:', error);
    });
}

function updateContent(language) {
  document.getElementById("team-element-header").textContent = teampagedata[language + 'Header'];
  document.getElementById("team-header").textContent = teampagedata[language + 'Title'];
  document.getElementById("team-header-content").textContent = teampagedata[language + 'SubInfo'];
  document.getElementById("Leihl").textContent = teampagedata[language + 'LeihlHeader'];
  document.getElementById("leihl-content").textContent = teampagedata[language + 'LeihlContent'];
  document.getElementById("Nithya").textContent = teampagedata[language + 'NithyaHeader'];
  document.getElementById("nithya-content").textContent = teampagedata[language + 'NithyaContent'];
  document.getElementById("Vogel").textContent = teampagedata[language + 'VogelHeader'];
  document.getElementById("vogel-content").textContent = teampagedata[language + 'VogelContent'];
  const contactPersons = document.getElementsByClassName("contact-person");
  for (let i = 0; i < contactPersons.length; i++) {
    contactPersons[i].textContent = teampagedata[language + 'Contact'];
}}



function onClickLang(UserOptions) {
  if (UserOptions === 'ENGLISH' || UserOptions === 'FRENCH') {
    updateContent(UserOptions.toLowerCase());
  } else {
    console.error('Invalid language option');
  }
}

initLoad();









