const express = require('express');
const bodyParser = require('body-parser');
const handleResponse = require('./controller');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    handleResponse.send(req,res).then(()=>{
        res.send('thank you!');
    })
});

app.listen(port, () => console.log(`app listening on port ${port}!`));