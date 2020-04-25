const $ = require('jquery');
// const {saveUserRepos} = require('../database/model.js');
const {getReposByUsername} = require('../helpers/model.js');

const getUserRepos = (username, res) => {
  console.log(`Accessing github API for ${username}...`);
  getReposByUsername(username, res)


}
    // $.ajax({
    //   type: 'GET',
    //   url: `https://api.github.com//users/${username}/repos`,
    //   success: saveUserRepos(data, res),
    //   error: res.status(500).send(error)
    // })

    module.exports = {
      getUserRepos:getUserRepos
    }