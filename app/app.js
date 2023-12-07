const express = require('express');
const path = require('path');
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
    
    const indexPath = path.join(__dirname, 'index.html');
    
    res.sendFile(indexPath, (err) => {
    if(err){
        console.log(err);
    }
   })
});

app.listen(port, () => {
    console.log(`My first app listening on port ${port}`)
});