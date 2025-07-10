import FilledButton from "../buttons/filledButton";
import Socials from "../footer/socials/socials";
import styles from "./contact-me.module.css";
import { getInTouchText } from "@/app/util";

export default function ContactMe() {
  return (
    <section
      className={`${styles.ContactMeContainer}w-full flex flex-col justify-center items-center`}>
      <section className={`${styles.getInTouchContainer} flex justify-between`}>
        <h1>Get in Touch</h1>
        <div className={styles.getInTouchText}>
          <p>{getInTouchText}</p>
          <Socials />
        </div>
      </section>
      <section className={`${styles.contactContainer} flex justify-between`}>
        <h1>Contact Me</h1>
        <div className={styles.contactForm}>
          <form action="">
            <label htmlFor="name">
              {" "}
              <p className="mb-2 font-bold">Name</p>
              <input name="name" type="text" placeholder="Jane Appleseed" />
            </label>
            <label htmlFor="email">
              {" "}
              <p className="mb-2 font-bold">Email</p>
              <input
                name="email"
                type="email"
                placeholder="example@example.com"
              />
            </label>
            <label htmlFor="message">
              {" "}
              <p className="mb-2 font-bold">Message</p>
              <textarea name="message" placeholder="How can I help?" />
            </label>
            <FilledButton text="SEND MESSAGE" />
          </form>
        </div>
      </section>
    </section>
  );
}
