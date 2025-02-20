import {} from "@/app/util";
import styles from "./portfolioShort.module.css";
import PortfolioShortComp from "./portSummaryComp/portSummaryComp";

export default function PortfolioShort() {
  return (
    <section
      className={`${styles.PortfolioShortContainer} w-full flex justify-center items-center`}>
      <PortfolioShortComp />
    </section>
  );
}
