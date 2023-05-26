"use client";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import GitHubContext from "../../context/github-context";
import { useRouter } from "next/navigation";
export default function UserForm({ params }) {
  const router = useRouter();
  const { setGitRepo, setUser, setUserInfo, user, userInfo, gitRepo } =
    useContext(GitHubContext);
  const [inputNone, setInputNone] = useState(true);
  params &&
    useEffect(() => {
      axios
        .get(`https://api.github.com/users/${params}`)
        .then((res) => setUserInfo(res.data))
        .catch((err) => {
          return (
            console.error(err), alert("kullanıcı bulunmadı"), setInputNone(true)
          );
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
        return (
          console.error(err), alert("kullanıcı bulunmadı"), setInputNone(true)
        );
      });
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => setGitRepo(res.data));
    setUser("");
    setInputNone(false);
    router.push(`/${user}`);
  };

  console.log(user);
  console.log(userInfo);
  console.log(gitRepo);

  return (
    <div className={styles.userForm}>
      {inputNone && (
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
