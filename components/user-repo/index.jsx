"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
export default function UserRepo({ params }) {
  const [gitRepo, setGitRepo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params}/repos`)
      .then((res) => setGitRepo(res.data))
      .catch((err) => {
        return console.error(err);
      });
  }, [params]);
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
