import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./socials.module.css";

export default function Socials() {
  return (
    <div className={`${styles.socials} flex flex-row gap-6`}>
      <Link
        href={"https://github.com/muhdibee"}
        target="_blank"
        title="github/@muhdibee">
        <FaGithub className={`${styles.github}`} />
      </Link>
      <Link href={"https://x.com/muhdibee"} target="_blank" title="X/@muhdibee">
        <FaXTwitter className={`${styles.x}`} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/muhdibee/"}
        target="_blank"
        title="LinkedIn/@muhdibee">
        <FaLinkedin className={`${styles.linkedIn}`} />
      </Link>
    </div>
  );
}
