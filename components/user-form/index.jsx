"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
export default function UserForm() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    router.push(`/${user}`);
    setUser("");
  };

  return (
    <div className={styles.userForm}>
      <form onSubmit={formSubmit}>
        <input
          className={styles.userInput}
          type="text"
          value={user}
          placeholder="user name enter"
          onChange={(e) => setUser(e.target.value)}
        />
      </form>
    </div>
  );
}
