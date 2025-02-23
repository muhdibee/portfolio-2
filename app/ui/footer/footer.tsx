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
    <footer
      className={`${styles.container} w-full flex flex-col justify-between items-center`}>
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
        </div>
        <Socials />
      </section>
    </footer>
  );
}
