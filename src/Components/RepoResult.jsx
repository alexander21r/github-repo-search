import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RepoResult.css"

const RepoResult = (props) => {
  const { repo } = props;
  const printRepos =
    repo !== true ? (
      repo.map((item) => (
        <ul key={item.id} >
          <li className="repoResult">
            {" "}
            <a  href={item.html_url} target="_blank">{item.name}</a>{" "}
          </li>
        </ul>
      ))
    ) : (
      <li>No repo find</li>
    );

  return <>{printRepos}</>;
};

export default RepoResult;
