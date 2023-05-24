import styles from "./page.module.css";
import HomeContainer from "@/container/home";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeContainer />
    </main>
  );
}
