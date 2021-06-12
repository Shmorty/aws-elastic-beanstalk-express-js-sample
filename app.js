const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Let\'s go AWS elastic beanstalk, run that express app!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
