const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hey Bro, How are you today!');
});

app.listen(8080, () => {
  console.log('Listening dude to your port 8080');
});