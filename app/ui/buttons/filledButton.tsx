import styles from "@/app/ui/navbar/navbar.module.css";
import Link from "next/link";
import { UrlObject } from "url";

interface NavbarProps {
  text: string;
  link?: string | UrlObject;
}

export default function FilledButton({ text, link = "#" }: NavbarProps) {
  return (
    <Link href={link}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}
