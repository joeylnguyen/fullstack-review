const express = require('express');
const {getReposByUsername, getMostForkedRepos} = require('../helpers/controller.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded());
app.use((req, res, next)=> {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
})

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log(`Incoming data: `, req.body);
  getReposByUsername(req.body.username, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`Posted user's repos to database!`);
    }
  });
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  getMostForkedRepos((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(results)
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

