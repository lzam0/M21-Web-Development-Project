
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
  //iterates same contact info for each member
  const contactPersons = document.getElementsByClassName("contact-person");
  for (let i = 0; i < contactPersons.length; i++) {
    contactPersons[i].textContent = teampagedata[language + 'Contact'];
}}

function createContent(teampagedata){
    const mainElement = document.querySelector('main');
    //temporarily keep main element empty using inner html
    mainElement.innerHTML = '';

    for (const teammember of data){
        const cardcontainer = document.createElement('div');
        cardcontainer.classList('card');


        const maincontainer = document.createElement('div');
        maincontainer.classList('container');

        const header = document.createElement('h2');
        header.textContent = teammember.appendChild(header);

        const imagecontainer = document.createElement('div');
        imagecontainer.classList('team-photo');

        const image = document.createElement('img');
        image.src = teammember.image;
        image.alt = teammember.header;

        const content = document.createElement('p');
        content.textContent = teammember.content;
        maincontainer.appendChild(content);

       const contactbutton = document.createElement('button');
       contactbutton.classList.add('contact-person');
       const contactlink = document.createElement('a');
       contactlink.href = 'mailto:' + member.contact;
       contactlink.appendChild(contactbutton);
       contactlink.textContent = 'Contact';
       maincontainer.appendChild(contactlink);

       cardcontainer.appendChild(maincontainer),
       mainElement.appendChild(cardcontainer)




       

    }

    

}


class teamdata {
    constructor(header,img,content,contact) {
        this.header = header;
        this.img = img;
        this.content = content;
        this.contact = contact;
    }
}

const Leihl = new teamdata ('Leihl','./images/pfp.jpg', 'Leihl Content','psh22xtu@uea.ac.uk')
const Nithya = new teamdata('Nithya','./images/nithya.jpg', 'Nithya Content','bcy23suu@uea.ac.uk')
const Vogel = new teamdata('Vogel','./images/pfp2.jpeg','Vogel Content','aed23nnu@uea.ac.uk')

const teamdatas = []

teamdatas.push(Leihl)
teamdatas.push(Nithya)
teamdatas.push(Vogel)





function onClickLang(UserOptions) {
  if (UserOptions === 'ENGLISH' || UserOptions === 'FRENCH') {
    updateContent(UserOptions.toLowerCase());
  } else {
    console.error('Invalid language option');
  }
}

initLoad();









