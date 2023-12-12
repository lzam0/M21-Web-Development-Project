const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000; // current port

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
    console.log(`Running Web Development Project on PORT ${port}`)
});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "webdevgroup21m@gmail.com",
        pass: "zmdq zacb rlbp fvir",
        // pass: "zmdq zacb rlbp fvir", // replace with your Gmail password
    },
  });


//  https://nodemailer.com
//  documentation learnt from website

app.post('/form', jsonParser, (req, res) => {
    const body = req.body;
    const first = body.first;
    const last = body.last;
    const email = body.email;
    const message = body.message;

    // sender mail description
    const mailOptions = {
        from: '"Group 21M UN Sustainability" <webdevgroupm21@gmail.com>',
        to: email,
        subject: 'Thank you for signing up to our newsletter!',
        text: 'Check more about UN Sustainability Development',
        html: '<b>Hi ' + first + ' ' + last + ',</b><br><br>Thank you for signing up to our newsletter service!<br>Check out the attachment on why our Goals <b>matter<b>',
        attachments:[
        {
            filename: "newsletter.pdf",
            path: path.join(__dirname, 'public', 'images', 'newsletter.pdf'),
            contentType: 'application/pdf'
        },
        {
            filename: "newsletter.pdf2",
            path: path.join(__dirname, 'public', 'images', 'newsletter2.pdf'),
            contentType: 'application/pdf'
        },
        {
            filename: "newsletter3.pdf",
            path: path.join(__dirname, 'public', 'images', 'newsletter3.pdf'),
            contentType: 'application/pdf'
        },
    ]}
    

    // check if there is any errors within sending email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(error);
            res.send('Error occurred while sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Form Submission Successful');
            res.send(info.response);
        }
    });
});