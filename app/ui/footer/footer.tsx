import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import styles from "@/app/ui/footer/footer.module.css";
import logo from "../../../public/logo2.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/button";

export default function Footer() {
  return (
    <footer
      className={`${styles.container} flex flex-col justify-between w-full`}>
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
      <section
        className={`${styles.nav} flex flex-row justify-between items-center pt-3 pb-3`}>
        <div className="flex flex-row justify-between gap-6">
          <div className="mr-12">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="links">
            <li>
              <Link href={"/"}>
                <p className={`navLink`}>HOME</p>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"}>
                <p className={`navLink`}>PORTFOLIO</p>
              </Link>
            </li>
            <li>
              <Link href={"/contact-me"}>
                <p className={`navLink`}>CONTACT ME</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.socials} flex flex-row gap-6`}>
          <Link
            href={"https://github.com/muhdibee"}
            target="_blank"
            title="github/@muhdibee">
            <FaGithub className={`${styles.github}`} />
          </Link>
          <Link
            href={"https://x.com/muhdibee"}
            target="_blank"
            title="X/@muhdibee">
            <FaXTwitter className={`${styles.x}`} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/muhdibee/"}
            target="_blank"
            title="LinkedIn/@muhdibee">
            <FaLinkedin className={`${styles.linkedIn}`} />
          </Link>
        </div>
      </section>
    </footer>
  );
}
