import React from "react";
import UserInfo from "@/components/user-info";
import UserRepo from "@/components/user-repo";
import styles from "./styles.module.css";
export default function GithubContainer() {
  return (
    <div className={styles.container}>
      <UserInfo />
      <UserRepo />
    </div>
  );
}
