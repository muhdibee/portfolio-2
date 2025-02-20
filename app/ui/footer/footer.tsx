"use client";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "@/app/ui/footer/footer.module.css";
import logo from "../../../public/logo2.png";
import Button from "../buttons/button";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`${styles.container} w-full flex flex-col justify-between items-center`}>
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
        className={`${styles.navContainer} w-full flex justify-center items-center`}>
        <div
          className={`${styles.nav} flex flex-row justify-between items-center pt-3 pb-3`}>
          <div className="flex flex-row justify-between gap-6">
            <div className="mr-12">
              <Image src={logo} alt="logo" />
            </div>
            <ul className="links">
              <li>
                <Link href={"/"}>
                  <p
                    className={clsx(` navLink`, {
                      ["activeLink"]: "/" === pathname,
                    })}>
                    HOME
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/portfolio"}>
                  <p
                    className={clsx(` navLink`, {
                      ["activeLink"]: "/portfolio" === pathname,
                    })}>
                    PORTFOLIO
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/contact-me"}>
                  <p
                    className={clsx(` navLink`, {
                      ["activeLink"]: "/contact-me" === pathname,
                    })}>
                    CONTACT ME
                  </p>
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
        </div>
      </section>
    </footer>
  );
}
