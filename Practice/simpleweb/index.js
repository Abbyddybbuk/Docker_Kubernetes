const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hey Buddy!');
});

app.listen(8080, () => {
  console.log('Listening dude to your port 8080');
});