import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={`${styles.hero} w-full`}>
        <div className={styles.about}>
          Hey, I’m Muhammad Ibrahim and I love building awesome software
        </div>
      </div>
      <div>
        <div className={styles.aboutImage}></div>
        <div className={styles.aboutText}></div>
      </div>
    </div>
  );
}
