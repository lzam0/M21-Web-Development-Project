let formpagedata = {};

function initLoad() {
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
  document.getElementById("contactHeaderLine").textContent = formpagedata[language + 'ContactHeaderLine'];
  document.getElementById("connectWith").textContent = formpagedata[language + 'ConnectWith'];
  document.getElementById("joinNewsletter").textContent = formpagedata[language + 'JoinNewsletter'];
  document.getElementById("requiredMarkedAsterisk").textContent = formpagedata[language + 'RequiredMarkedAsterisk'];
  document.getElementById("firstNameLine").textContent = formpagedata[language + 'FirstNameLine'];
  document.getElementById("lastNameLine").textContent = formpagedata[language + 'LastNameLine'];
  document.getElementById("emailLine").textContent = formpagedata[language + 'EmailLine'];
  document.getElementById("messageLine").textContent = formpagedata[language + 'MessageLine'];
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
  alert("Form Submission Successful");
  console.log("News Letter Signed Up");
}

function onResponse(response){
  return response.text();
}

// Grab form submit button
const form = document.querySelector("#form");

// event listenr when submit runs
addEventListener('submit', processSubmit);

// run different language
initLoad();