"use client";

import { usePathname } from "next/navigation";
import { portfolios } from "@/app/util";
import styles from "./portfolioDetail.module.css";
import NotFoundPage from "../notFoundPage";

export default function PortfolioDetail() {
  const pathname = usePathname();
  const project = portfolios.filter((portfolio) => portfolio.link === pathname);

  if (project.length < 1) {
    console.log(project);
    return <NotFoundPage />;
  }

  return (
    <section className={styles.portfolioDetailContainer}>
      <p> Portfolio detail for {project[0].name} </p>
    </section>
  );
}
