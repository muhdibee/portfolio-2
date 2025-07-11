"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "@/app/ui/footer/footer.module.css";
import logo from "../../../public/logo2.png";
import Socials from "./socials/socials";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={`${styles.container} flex items-center justify-center`}>
      <section className={`${styles.navContainer} `}>
        <div className={`${styles.nav} `}>
          <span className={`${styles.logo} logo mr-3 sm:mr-8`}>
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </span>
          <ul className={`${styles.links} links sm:mr-3 md:mr-8 `}>
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
        <Socials />
      </section>
    </footer>
  );
}
