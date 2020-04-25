import React from 'react';
import Repo from './Repo.jsx';


const RepoList = ({repos, count}) => {
  const repoList = repos.map(repo =>
    <Repo
      name={repo.repo_name}
      repoURL={repo.repo_url}
      owner={repo.repo_owner}
      ownerURL={repo.repo_owner_url}
      forkCount={repo.fork_count}
      key={repo.repo_id}
    />)

  return (
  <div>
    {repoList}
    There are {count} repos.
  </div>
  )
}
//TODO counter only counts 25
export default RepoList;