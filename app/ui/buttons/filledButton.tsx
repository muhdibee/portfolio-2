import styles from "@/app/ui/buttons/filledButton.module.css";
import downward_arrow from "../../../public/downward_symbol.png";
import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";

interface NavbarProps {
  text: string;
  link?: string | UrlObject;
  icon?: boolean;
}

export default function FilledButton({
  text,
  icon = false,
  link = "#",
}: NavbarProps) {
  return (
    <div className={`${styles.container} flex items-center justify-center`}>
      <Link href={link} className={`flex items-center justify-start gap-6`}>
        {icon ? (
          <span className=" flex justify-self-start">
            <Image src={downward_arrow} alt="arrow symbol" />
          </span>
        ) : (
          ""
        )}
        <button>{text}</button>
      </Link>
    </div>
  );
}
