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

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;