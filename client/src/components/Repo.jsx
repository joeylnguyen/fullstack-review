import React from 'react';

const Repo = ({name, repoURL, owner, ownerURL, forkCount}) => {
  return (
    <div style={{borderStyle: 'solid', borderWidth: '1px'}}>
      <div>
        Repository:
        <a href={repoURL}> {name}</a>
      </div>
      <div>
        By:
        <a href={ownerURL}> {owner}</a>
      </div>
      <div>
        Forks: {forkCount}
      </div>
    </div>
  )
}

export default Repo;