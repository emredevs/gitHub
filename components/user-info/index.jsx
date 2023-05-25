"use client";
import React, { useContext } from "react";
import GitHubContext from "../../context/github-context";
import styles from "./styles.module.css";
export default function UserInfo() {
  const { userInfo } = useContext(GitHubContext);
  if (userInfo.length === 0) {
    return null;
  }
  return (
    <div className={styles.userCard}>
      <div>
        <img src={userInfo.avatar_url} alt="user photo" />
      </div>
      <div>User Name: {userInfo.name}</div>
      <div>Nickname :{userInfo.login}</div>
      <div>Followers: {userInfo.followers}</div>
      <div>Following: {userInfo.following}</div>
      <div>Public Gists: {userInfo.public_gists}</div>
      <div>Public Repos: {userInfo.public_repos}</div>
      <div>created at: {userInfo.created_at}</div>
      <div>updated at :{userInfo.updated_at}</div>
    </div>
  );
}
