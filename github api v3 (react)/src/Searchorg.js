import React, { useState } from "react";

function Searchorg() {
  const [inputtext, setinput] = useState("");
  const [repos, setrepos] = useState([]);

  const url = `https://api.github.com/orgs/${inputtext}/repos`;

  function handleChange(e) {
    setinput(e.target.value);
  }
  function handleClick() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setrepos(data));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter organisation"
        onChange={handleChange}
        value={inputtext}
      />
      <button onClick={handleClick}> Search </button>
    </div>
  );
}

export default Searchorg;
