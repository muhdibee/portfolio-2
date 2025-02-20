import {} from "@/app/util";
import Image, { StaticImageData } from "next/image";
import styles from "./portSummaryComp.module.css";
import Button from "../../buttons/button";
import { capitalizeFirstLetter } from "@/app/util";
// import myImage from "../../../../public/images/manage/image-portfolio-manage@2x.jpg";

export interface PortfolioShortProp {
  id: number;
  name: string;
  shortDescription: string;
  staticPreviews: (string | StaticImageData)[];
  link: string;
  liveLink: string;
  skills: string[];
  technologies: string[];
}

export default function PortfolioShortComp({
  portfolio,
}: {
  portfolio: PortfolioShortProp;
}) {
  return (
    <section className={`${styles.PortfolioShortCompContainer} flex flex-row`}>
      <div className={`${styles.portfolioImageContainer}`}>
        <Image
          className={`${styles.portfolioImage}`}
          src={portfolio.staticPreviews[0]}
          alt={`${portfolio.name.toLocaleUpperCase()} portfolio image`}
        />
      </div>
      <div
        className={`${styles.description} flex flex-col items-start justify-center`}>
        <h3 className={`mb-7`}>{capitalizeFirstLetter(portfolio.name)}</h3>
        <p className={`mb-7`}>{portfolio.shortDescription}</p>
        <Button link={portfolio.link} text="VIEW PROJECT" />
      </div>
    </section>
  );
}
