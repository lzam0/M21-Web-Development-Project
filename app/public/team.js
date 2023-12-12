
let teampagedata = {};

function initLoad() {
  createTitles();
  createContent();
  fetchLanguageData();
}

// locate the list ID called "selection-center"
const teamContainer = document.querySelector(".team-container");

// empty array
const team = [];

class TeamInfo {
  constructor(name, img, bio, email) {
    this.name = name;
    this.img = img;
    this.bio = bio;
    this.email = email;
  }
}

const Leihl = new TeamInfo("Leihl", './images/pfp.jpg', "leihl", "psh22xtu@uea.ac.uk");
const Nithya = new TeamInfo("Nithya", './images/nithya.jpg', "nithya", "aed23nnu@uea.ac.uk");
const Vogel = new TeamInfo("Vogel", './images/pfp2.jpeg', "vogel", "bcy23suu@uea.ac.uk"); 

team.push(Leihl);
team.push(Nithya);
team.push(Vogel);

// Create repeated cards of about us
// create div .card
// create h2 with name
// create div .team-photo
// import img pfp

function createTitles(){
  const container = document.querySelector(".container");
  const header = document.querySelector("header");

  const teamHeader = document.createElement("h1");
  teamHeader.id = "team-element-header";

  const teamTitle = document.createElement("h2");
  teamTitle.id = "team-header";

  header.append(teamHeader);
  container.prepend(teamTitle);
}

function createContent(){
  let displayItem = team.map( (team) => {
    return `
    <div class="card">
    
    <h2>${team.name}</h2>

    <div class="team-photo">
    <img src="${team.img}">
    </div>

    <p id="${team.bio}-content"></p>

    <a class="contact-person" href="mailto:${team.email} alt="${team.bio}" "></a>
    </div>
    
    `
  });

  displayItem = displayItem.join("");
  console.log(displayItem)
  teamContainer.innerHTML = displayItem;
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

  document.getElementById("leihl-content").textContent = teampagedata[language + 'LeihlContent'];
  document.getElementById("nithya-content").textContent = teampagedata[language + 'NithyaContent'];
  document.getElementById("vogel-content").textContent = teampagedata[language + 'VogelContent'];
  //iterates same contact info for each member
  const contactPersons = document.getElementsByClassName("contact-person");
  for (let i = 0; i < contactPersons.length; i++) {
    contactPersons[i].textContent = teampagedata[language + 'Contact'];
  }
}

initLoad();