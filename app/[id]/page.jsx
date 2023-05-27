import React from "react";
import styles from "../page.module.css";
import GithubContainer from "@/container/github-container";
export default function UserPage({ params }) {
  return (
    <div className={styles.main}>
      <GithubContainer params={params.id} />
    </div>
  );
}
