"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import logo from "../../../public/logo.png";
import styles from "@/app/ui/navbar/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          {" "}
          <Link href={"/"}>
            <Image src={logo} alt="logo" className={`${styles.logo} logo`} />
          </Link>
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
    </div>
  );
}
