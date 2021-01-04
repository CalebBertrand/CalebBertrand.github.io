const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, './build')));

// send the user to index html page in spite of the url
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(port);