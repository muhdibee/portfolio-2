"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import logo from "../../../public/logo.png";
import hamburger from "../../../public/hamburger.png";
import close from "../../..//public/close.png";
import styles from "@/app/ui/navbar/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          {" "}
          <Link href={"/"}>
            <Image src={logo} alt="logo" className={`${styles.logo} logo`} />
          </Link>
        </div>
        <div className={styles.largeScreenLinks}>
          <ul className="navLinks">
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
        <div
          className={
            isNavOpen ? styles.showMobileLinks : styles.hideMobileLinks
          }>
          <ul>
            <li>
              <Link href={"/"} onClick={() => setIsNavOpen(!isNavOpen)}>
                <p
                  className={clsx(` navLink`, {
                    ["activeLink"]: "/" === pathname,
                  })}>
                  HOME
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                onClick={() => setIsNavOpen(!isNavOpen)}>
                <p
                  className={clsx(` navLink`, {
                    ["activeLink"]: "/portfolio" === pathname,
                  })}>
                  PORTFOLIO
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/contact-me"}
                onClick={() => setIsNavOpen(!isNavOpen)}>
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
        <span className={styles.navButton}>
          <Image
            src={hamburger}
            alt="Menu button"
            width={18}
            height={19}
            className={
              isNavOpen ? styles.hideHamburgerBtn : styles.showHamburgerBtn
            }
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <Image
            src={close}
            alt="close button"
            width={18}
            height={19}
            className={isNavOpen ? styles.showCloseBtn : styles.hideCloseBtn}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </span>
      </div>
    </div>
  );
}
