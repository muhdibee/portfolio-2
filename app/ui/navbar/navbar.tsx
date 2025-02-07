import styles from "@/app/ui/navbar/navbar.module.css";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {" "}
        <Image src={logo} alt="logo" className={`${styles.logo} logo`} />
      </div>
      <ul className={styles.links}>
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
  );
}
