var formpagedata;

function initload()
{
  var formpagedata1;
fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();

})
.then(data => {
formpagedata1 = data;
document.getElementById("contactHeaderLine").textContent=formpagedata1.formpage.englishContactHeaderLine;
document.getElementById("connectWith").textContent=formpagedata1.formpage.englishConnectWith;
document.getElementById("joinNewsletter").textContent=formpagedata1.formpage.englishJoinNewsletter;
document.getElementById("requiredMarkedAsterisk").textContent=formpagedata1.formpage.englishRequiredMarkedAsterisk;
document.getElementById("firstNameLine").textContent=formpagedata1.formpage.englishFirstNameLine;
document.getElementById("lastNameLine").textContent=formpagedata1.formpage.englishLastNameLine;
document.getElementById("emailLine").textContent=formpagedata1.formpage.englishEmailLine;
document.getElementById("messageLine").textContent=formpagedata1.formpage.englishMessageLine;
document.getElementById("submitButtonLine").textContent=formpagedata1.formpage.englishSubmitButtonLine;
})
}

function onClickLang(UserOptions) { 
 
  if(UserOptions == 'ENGLISH'){
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    formpagedata = data;
    document.getElementById("contactHeaderLine").textContent=formpagedata1.formpage.englishContactHeaderLine;
    document.getElementById("connectWith").textContent=formpagedata1.formpage.englishConnectWith;
    document.getElementById("joinNewsletter").textContent=formpagedata1.formpage.englishJoinNewsletter;
    document.getElementById("requiredMarkedAsterisk").textContent=formpagedata1.formpage.englishRequiredMarkedAsterisk;
    document.getElementById("firstNameLine").textContent=formpagedata1.formpage.englishFirstNameLine;
    document.getElementById("lastNameLine").textContent=formpagedata1.formpage.englishLastNameLine;
    document.getElementById("emailLine").textContent=formpagedata1.formpage.englishEmailLine;
    document.getElementById("messageLine").textContent=formpagedata1.formpage.englishMessageLine;
    document.getElementById("submitButtonLine").textContent=formpagedata1.formpage.englishSubmitButtonLine;
})
  
}
  if(UserOptions == 'FRENCH'){
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    formpagedata = data;
    document.getElementById("contactHeaderLine").textContent=formpagedata1.formpage.frenchContactHeaderLine;
    document.getElementById("connectWith").textContent=formpagedata1.formpage.frenchConnectWith;
    document.getElementById("joinNewsletter").textContent=formpagedata1.formpage.frenchJoinNewsletter;
    document.getElementById("requiredMarkedAsterisk").textContent=formpagedata1.formpage.frenchRequiredMarkedAsterisk;
    document.getElementById("firstNameLine").textContent=formpagedata1.formpage.frenchFirstNameLine;
    document.getElementById("lastNameLine").textContent=formpagedata1.formpage.frenchLastNameLine;
    document.getElementById("emailLine").textContent=formpagedata1.formpage.frenchEmailLine;
    document.getElementById("messageLine").textContent=formpagedata1.formpage.frenchMessageLine;
    document.getElementById("submitButtonLine").textContent=formpagedata1.formpage.frenchSubmitButtonLine;
  })}

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

/* Grab form submit button */
const form = document.querySelector("#form");

addEventListener('submit', processSubmit);