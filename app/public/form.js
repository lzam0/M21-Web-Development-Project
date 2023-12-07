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
    alert("Form Submission Successful")
}

function onResponse(response){
    return response.text();
}

/* Grab form submit button */
const form = document.querySelector("#form");

addEventListener('submit', processSubmit);