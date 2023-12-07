const express = require('express');
const app = express();
const port = 3000; // current port

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(express.static("public"));

app.get('/', (req, res) => {
    
    res.sendFile('index.html', (err) =>{
        if (err){
            console.log(err);
        }
    })
});

app.listen(port, () => {
    console.log(`My first app listening on port ${port}`)
});


app.post('/form', jsonParser, (req, res) => {
    const body = req.body;
    const first = body.first;
    const last = body.last;
    const email = body.email;
    const message = body.message;

    res.send("Form Submission Successful");
});