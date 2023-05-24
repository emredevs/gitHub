"use client";
import { useContext, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import GitHubContext from "../../context/github-context";
export default function UserForm({ params }) {
  const { setGitRepo, setUser, setUserInfo, user, userInfo, gitRepo } =
    useContext(GitHubContext);
  params &&
    useEffect(() => {
      axios
        .get(`https://api.github.com/users/${params}`)
        .then((res) => setUserInfo(res.data))
        .catch((err) => {
          return console.error(err), alert("kullanıcı bulunmadı");
        });
      axios
        .get(`https://api.github.com/users/${params}/repos`)
        .then((res) => setGitRepo(res.data));
    }, [params]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => {
        return console.error(err), alert("kullanıcı bulunmadı");
      });
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => setGitRepo(res.data));
    setUser("");
  };

  console.log(user);
  console.log(userInfo);
  console.log(gitRepo);

  return (
    <div className={styles.userForm}>
      {params || gitRepo.length > 0 ? null : (
        <form onSubmit={formSubmit}>
          <input
            className={styles.userInput}
            type="text"
            value={user}
            placeholder="user name enter"
            onChange={(e) => setUser(e.target.value)}
          />
        </form>
      )}
    </div>
  );
}
