const {save} = require('../database/index.js');
const request = require('request');
const config = require('../config.js');

const saveUserRepos = (repos, res) => {
  // Save repos to db
  // save(repos, res)
}

let getReposByUsername = (username, res) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log(username);
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, results, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const data = JSON.parse(body);
      save(data, res);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;