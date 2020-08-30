import React from "react";

function Repos({repos})
{
  const repolist=repos.map((repo)=>{
    return <li key={Math.random()}><a href={repo.html_url}>{repo.name}</a></li>
  })
  return(
    <div>{repolist}</div>
  );
  
}

export default Repos;