import styles from "@/app/ui/navbar/navbar.module.css";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {" "}
        <Image src={logo} alt="logo" height={30} width={30} />
      </div>
      <ul className={styles.links}>
        <li>
          <Link href={"/home"}>HOME</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>PORTFOLIO</Link>
        </li>
        <li>
          <Link href={"/contact-me"}>CONTACT ME</Link>
        </li>
      </ul>
    </div>
  );
}
