let formpagedata = {};

function initLoad() {
  // Grab form submit button
  const form = document.querySelector("#form");

  // event listenr when submit runs
  addEventListener('submit', processSubmit);

  fetchLanguageData();
}

// run languagae.json
function fetchLanguageData() {
  fetch("http://localhost:3000/language.json")
    .then((res) => res.json())
    .then((data) => {
      formpagedata = data.formpage;

      // set english as main language
      updateContent('english');
    })

    // handle any errors
    .catch((error) => {
      console.error('Error fetching language data:', error);
    });
}

function updateContent(language) {
  document.getElementById("contact-title").textContent = formpagedata[language + 'ContactHeaderLine'];
  document.getElementById("connect").textContent = formpagedata[language + 'ConnectWith'];
  document.getElementById("join-newsletter").textContent = formpagedata[language + 'JoinNewsletter'];
  document.getElementById("requirement").textContent = formpagedata[language + 'RequiredMarkedAsterisk'];
  document.getElementById("first-text").textContent = formpagedata[language + 'FirstNameLine'];
  document.getElementById("last-text").textContent = formpagedata[language + 'LastNameLine'];
  document.getElementById("email-text").textContent = formpagedata[language + 'EmailLine'];
  document.getElementById("message-text").textContent = formpagedata[language + 'MessageLine'];
  document.getElementById("submit").textContent = formpagedata[language + 'submit'];
}

function onClickLang(UserOptions) {
  if (UserOptions === 'ENGLISH' || UserOptions === 'FRENCH') {
    updateContent(UserOptions.toLowerCase());
  } else {
    console.error('Invalid language option');
  }
}

function processSubmit(e){
  e.preventDefault();

  const firstName = document.querySelector("#first").value;

  const lastName = document.querySelector("#last").value;

  const email = document.querySelector("#email").value;
;
  const message = document.querySelector("#message").value;

  const formData = {
      first: firstName,
      last: lastName,
      email: email,
      message: message
  };

  const serializedMessage = JSON.stringify(formData);

  const fetchOptions ={
      method: "POST",
      headers: {
          "Accept": "Application/json",
          "Content-Type": "application/json"
      },
      body: serializedMessage
  }

  
  fetch("http://localhost:3000/form", fetchOptions)
  .then(onResponse)
  .then(onTextReady);
}

function onTextReady(text){
  importText(text);
}

function onResponse(response){
  return response.text();
}

function importText(text){
  let newP = document.createElement("p");
  let findID = document.getElementById("form-submission");

  newP.style.cssText = "color: red;"

  newP.textContent = text;

  findID.append(newP);
}

// run
initLoad();