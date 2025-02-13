import styles from "@/app/ui/buttons/filledButton.module.css";
import downward_arrow from "../../../public/downward_symbol.png";
import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";

interface NavbarProps {
  text: string;
  link?: string | UrlObject;
}

export default function FilledButton({ text, link = "#" }: NavbarProps) {
  return (
    <div className={`${styles.container} pe-8`}>
      <Link href={link} className={`flex justify-between`}>
        <span>
          <Image src={downward_arrow} alt="arrow symbol" />
        </span>
        <button>{text}</button>
      </Link>
    </div>
  );
}
