import Image from "next/image";
import { aboutMeDetail, heroSummary } from "@/app/util";
import myPhoto from "../../../public/images/me2.jpg";
import styles from "./home.module.css";
import Button from "../buttons/button";
// import FilledButton from "../buttons/filledButton";
import InterestComponent from "../intrestComp/interestComp";

export default function Home() {
  return (
    <div
      className={`${styles.container} w-full flex items-center justify-center`}>
      <main
        className={`${styles.homeContainer} w-auto flex flex-col items-center justify-center`}>
        <section
          className={`${styles.home} flex items-center justify-center flex-col`}>
          <section className={`${styles.sectionHero} w-full flex items-end`}>
            {/* <div
              className={`${styles.heroAbout} flex flex-col items-start justify-between md:shrink-0`}>
              <h1 className={`text-5xl py-[3rem]`}>{heroSummary}</h1>
              <FilledButton text="ABOUT ME" link={"#about-me"} icon />
            </div> */}
          </section>
          <section
            className={`${styles.sectionAbout} md:w-full md:flex flex-row`}>
            <div className={`${styles.aboutImageContainer}`}>
              <Image
                className={styles.aboutImageItem}
                alt="photo of Muhammad"
                src={myPhoto}
              />
            </div>
            <div id="about-me" className={`${styles.aboutDetails} pt-4`}>
              <h3 className={`my-8`}>About Me</h3>
              <p className={`${styles.aboutText} mb-8`}> {aboutMeDetail}</p>
              <Button text="GO TO PORTFOLIO" link={"/portfolio"} />
            </div>
          </section>
        </section>
        <InterestComponent />
      </main>
    </div>
  );
}
