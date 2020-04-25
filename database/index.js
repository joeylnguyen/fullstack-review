const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_name: String, // name
  repo_owner: String, // owner.login
  repo_owner_url: String, // ownerurl
  repo_url: String, // html_url
  repo_id: Number, // id
  fork_count: Number // forks
});

let Repo = mongoose.model('Repo', repoSchema); // model

let save = (repos, res) => {
  repos.forEach(repo => {
    console.log({
      repo_name: repo["name"],
      repo_owner: repo["owner"]["login"],
      repo_owner_url: repo["owner"]["html_url"],
      repo_url: repo["html_url"],
      repo_id: repo["id"],
      fork_count: repo["forks"]
    })
  })
  res.status(200).send('Done!');

  // Create a new document
  // Repo.create({
  //   repo_name:
  // })

  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;