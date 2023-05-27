import React from "react";
import UserInfo from "@/components/user-info";
import UserRepo from "@/components/user-repo";
import styles from "./styles.module.css";
export default function GithubContainer({ params }) {
  return (
    <div className={styles.container}>
      <UserInfo params={params} />
      <UserRepo params={params} />
    </div>
  );
}
