"use client";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function UserInfo({ params }) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params}`)
      .then((res) => {
        setUserInfo(res.data);
        setIsActive(true);
      })
      .catch((err) => {
        setIsActive(false);
        console.error(err);
        alert("Kullanıcı bulunamadı");
        router.push("/");
      });
  }, [params, router]);

  if (!isActive) {
    return null; // Hata durumunda içeriği gizlemek için null döndürüldü
  }

  return (
    <div className={styles.userCard}>
      <div>
        <img src={userInfo.avatar_url} alt="user photo" />
      </div>
      <div className={styles.userInfoContainer}>
        <div>User Name: {userInfo.name}</div>
        <div>Nickname :{userInfo.login}</div>
        <div>Followers: {userInfo.followers}</div>
        <div>Following: {userInfo.following}</div>
        <div>Public Gists: {userInfo.public_gists}</div>
        <div>Public Repos: {userInfo.public_repos}</div>
        <div>Created At: {userInfo.created_at}</div>
        <div>Updated At :{userInfo.updated_at}</div>
        <div>
          <Link href={"/"}>
            <div>Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
