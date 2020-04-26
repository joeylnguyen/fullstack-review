const {save, getRepos} = require('../database/index.js');
const request = require('request');
const config = require('../config.js');


let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      callback(error)
    }
    const data = JSON.parse(body);
    save(data, callback);
  })
}

let getMostForkedRepos = callback => {
  getRepos(callback);
}

module.exports = {
  getReposByUsername:getReposByUsername,
  getMostForkedRepos: getMostForkedRepos
}