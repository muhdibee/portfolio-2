import styles from "./portfolioShort.module.css";
import { portfolios } from "../../util/index";
import PortfolioShortComp from "./portSummaryComp/portSummaryComp";
import InterestComponent from "../intrestComp/interestComp";

export default function PortfolioShort() {
  return (
    <section
      className={`${styles.PortfolioShortContainer} w-full flex flex-col justify-center items-center`}>
      {portfolios.map((portfolio, index) => (
        <PortfolioShortComp key={index} portfolio={portfolio} />
      ))}
      <InterestComponent />
    </section>
  );
}
