import Button from "../buttons/button";
import styles from "./interestComp.module.css";

export default function InterestComponent() {
  return (
    <section
      className={`${styles.container} w-full flex items-center justify-center`}>
      <div className={`${styles.main}`}>
        <h2>
          <b>
            Looking to hire <br /> an engineer?
          </b>
        </h2>
        <div className={`${styles.hr} font-bold border-2 border-solid p-2`}>
          <hr />
        </div>
        <Button text="CONTACT ME" link={"/contact-me"} />
      </div>
    </section>
  );
}
