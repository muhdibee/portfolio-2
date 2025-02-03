import styles from "@/app/ui/footer/footer.module.css";

import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className={`${styles.container} flex flex-col justify-between w-full `}>
      <div
        className={`${styles.main} flex flex-row justify-between items-center pt-4`}>
        <h2>
          Interested in doing <br /> a project together?
        </h2>
        <div className={`${styles.hr} font-bold`}>
          <hr />
        </div>
        <button className="border-2 border-solid">CONTACT ME</button>
      </div>
      <div
        className={`${styles.nav} flex flex-row justify-between items-center pt-3 pb-3`}>
        <div className="flex flex-row justify-between gap-6">
          <div>
            <Image src={logo} alt="logo" height={40} width={40} />
          </div>
          <ul className={`${styles.links} flex flex-row justify-between gap-6`}>
            <li>
              <Link href={"/"}>HOME</Link>
            </li>
            <li>
              <Link href={"/portfolio"}>PORTFOLIO</Link>
            </li>
            <li>
              <Link href={"/contact-me"}>CONTACT ME</Link>
            </li>
          </ul>
        </div>
        <div>Socials</div>
      </div>
    </div>
  );
}
