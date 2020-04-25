import React from 'react';

const Repo = ({name, repoURL, owner, ownerURL, forkCount}) => {
  return (
    <div style={{borderStyle: 'solid', borderWidth: '1px'}}>
      <h4>
        Repository:
        <a href={repoURL}> {name}</a>
      </h4>
      <h5>
        By:
        <a href={ownerURL}> {owner}</a>
      </h5>
    </div>
  )
}

export default Repo;