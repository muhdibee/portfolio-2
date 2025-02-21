"use client";

import { usePathname } from "next/navigation";
import { portfolios } from "@/app/util";
import styles from "./portfolioDetail.module.css";

export default function PortfolioDetail() {
  const pathname = usePathname();

  console.log(pathname);

  const project = portfolios.filter((portfolio) => portfolio.link === pathname);

  if (project.length < 1) {
    console.log(project);
    return (
      <section className="w-full h-[20rem] flex items-center justify-center bg-gray-300">
        <h1> 404 | Page could not be found</h1>
      </section>
    );
  }

  return (
    <section className={styles.portfolioDetailContainer}>
      <p> Portfolio detail for {project[0].name} </p>
    </section>
  );
}
