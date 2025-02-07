import styles from "@/app/ui/buttons/button.module.css";
import Link from "next/link";
import { UrlObject } from "url";

interface NavbarProps {
  text: string;
  link?: string | UrlObject;
}

export default function Button({ text, link = "#" }: NavbarProps) {
  return (
    <div className={`${styles.container} flex items-center justify-center`}>
      <Link href={link}>
        <button>{text}</button>
      </Link>
    </div>
  );
}
