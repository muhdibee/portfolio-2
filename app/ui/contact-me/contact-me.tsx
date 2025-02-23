import styles from "./contact-me.module.css";
import { getInTouchText } from "@/app/util";

export default function ContactMe() {
  return (
    <section
      className={`${styles.ContactMeContainer} flex justify-center items-center`}>
      <section>
        <h1>Get in Touch</h1>
        <div>
          <p>{getInTouchText}</p>
          <div></div>
        </div>
      </section>
      <section></section>
    </section>
  );
}
