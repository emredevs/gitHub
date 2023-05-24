"use client";
import React, { useContext } from "react";
import GitHubContext from "../../context/github-context";
import style from "./style.module.css";
export default function UserRepo() {
  const { gitRepo } = useContext(GitHubContext);
  return (
    <div className={style.userRepo}>
      {gitRepo.map((repo) => (
        <div className={style.repoCard} key={repo.id}>
          <div>Repo Name: {repo.name}</div>
          <div>Size: {repo.size} KB</div>
          <div>Language: {repo.language}</div>
          <div>Watchers: {repo.watchers}</div>
        </div>
      ))}
    </div>
  );
}
