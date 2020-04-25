const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_name: String, // name
  repo_owner: String, // owner.login
  repo_owner_url: String, // ownerurl
  repo_url: String, // html_url
  repo_id: {type: Number, unique: true},// id
  fork_count: Number // forks
});

let Repo = mongoose.model('Repo', repoSchema); // model

let save = (repos, callback) => {
  const repoData = repos.map(repo => (
    {
      repo_name: repo["name"],
      repo_owner: repo["owner"]["login"],
      repo_owner_url: repo["owner"]["html_url"],
      repo_url: repo["html_url"],
      repo_id: repo["id"],
      fork_count: repo["forks"]
    }
  ));

  Repo.createIndexes({repo_id: Number, unique: true});

  Repo.insertMany(repoData, (error, results) => {
      if (error) {
        callback(error)
      } else {
        callback(null, results)
      }
    });
}

let getRepos = (callback) => {
  Repo.find({}).sort({ fork_count : -1 }).limit(25).exec((error, repos) => {
    if (error) {
      callback(error);
    } else {
      Repo.count({}, (error, count) => {
        if (error) {
          callback(error);
        } else {
          callback(null, {repos: repos, count: count});
        }
      });
    }
  });
}


module.exports = {
  save: save,
  getRepos: getRepos
}