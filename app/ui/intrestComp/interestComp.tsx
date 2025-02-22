import Button from "../buttons/button";
import styles from "./interestComp.module.css";

export default function InterestComponent() {
  return (
    <section
      className={`${styles.main} flex flex-row justify-between items-center`}>
      <h3>
        Interested in doing <br /> a project together?
      </h3>
      <div className={`${styles.hr} font-bold`}>
        <hr />
      </div>
      <Button text="CONTACT ME" link={"/contact-me"} />
    </section>
  );
}
