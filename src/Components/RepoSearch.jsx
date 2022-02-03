import { useState } from "react";
import RepoResult from "./RepoResult";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RepoSearch.css";

const RepoSearch = () => {
  const [searchField, setSearchField] = useState("");
  const [repo, setRepo] = useState([]);

  const searchChange = (e) => {
    setSearchField(e.target.value);
  };

  const clickHandler = async () => {
    try {
      const repos = await axios.get(
        `https://api.github.com/users/${searchField}/repos`
      );
      setRepo(repos.data);
    } catch (err) {
      console.log(`ERROR ${err}`);
    }
  };

  return (
    <div>
      <div className="inputCenter">
        <input
          type="text"
          placeholder="Github username"
          value={searchField}
          onChange={searchChange}
        />
        <button onClick={clickHandler}>Search</button>
      </div>
      <RepoResult repo={repo} />
    </div>
  );
};

export default RepoSearch;
