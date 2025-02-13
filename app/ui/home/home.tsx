import Image from "next/image";
import { aboutMeDetail, heroSummary } from "@/app/util";
import myPhoto from "../../../public/images/me2.jpg";
import styles from "./home.module.css";
import Button from "../buttons/button";
import FilledButton from "../buttons/filledButton";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={`${styles.sectionHero} w-full flex items-end`}>
        <div
          className={`${styles.heroAbout} flex flex-col items-start justify-between`}>
          <h1 className={`text-5xl py-[3rem]`}>{heroSummary}</h1>
          <FilledButton text="ABOUT ME" link={"/about-me"} />
        </div>
      </section>
      <section className={`${styles.sectionAbout} w-full flex flex-row my-10`}>
        <div className={`${styles.aboutImageContainer}`}>
          <Image
            className={styles.aboutImageItem}
            alt="photo of Muhammad"
            src={myPhoto}
          />
        </div>
        <div className={`${styles.aboutDetails} pt-4`}>
          <h3 className={`my-8`}>About Me</h3>
          <p className={`${styles.aboutText} mb-8`}> {aboutMeDetail}</p>
          <Button text="GO TO PORTFOLIO" link={"/portfolio"} />
        </div>
      </section>
    </main>
  );
}
