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

let save = (repos, res) => {
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

    Repo.insertMany(repoData, error => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(201).send(`Posted user's repos to database!`);
      }
    });
}

module.exports.save = save;