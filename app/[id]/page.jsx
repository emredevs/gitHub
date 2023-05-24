import React from "react";
import styles from "../page.module.css";
import HomeContainer from "@/container/home";
export default function UserPage({ params }) {
  return (
    <div className={styles.main}>
      <HomeContainer params={params.id} />
    </div>
  );
}
