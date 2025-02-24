"use client";

import { usePathname } from "next/navigation";
import { portfolios } from "@/app/util";
import styles from "./portfolioDetail.module.css";
import NotFoundPage from "../notFoundPage";
import InterestComponent from "../intrestComp/interestComp";
import Image from "next/image";

export default function PortfolioDetail() {
  const pathname = usePathname();
  const data = portfolios.filter((portfolio) => portfolio.link === pathname);

  if (data.length < 1) {
    return <NotFoundPage />;
  }
  const project = data[0];

  return (
    <section
      className={`${styles.portfolioDetailContainer} w-full flex flex-col items-center justify-center`}>
      <section className={`${styles.heroContainer}`}>
        <Image
          src={project.staticPreviews[1]}
          alt={`${project.name} hero image`}
        />
      </section>
      <section
        className={`${styles.detailsContainer} flex flex-row items-start justify-between`}>
        <div className={`${styles.projectShortDesc}`}>
          <h2 className="mb-6">{project.name}</h2>
          <p className="mb-6">{project.shortDescription}</p>
          <div className="mb-6">
            {project.skills.map((skill, index) => (
              <span className="mr-2" key={index}>
                {skill}
              </span>
            ))}
          </div>
          <div className="mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="mr-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className={`${styles.projectInfoContainer}`}>
          <div className={`${styles.projectBackground} mb-10`}>
            <h3 className="mb-6 h4">{"Project Background"}</h3>
            <p>{project.background}</p>
          </div>
          <h3 className="mb-6">{"Static Previews"}</h3>
          <div className={`${styles.projectImagePreviews} mb-8`}>
            <Image
              src={project.staticPreviews[2]}
              alt={`project ${project.name} preview image`}
            />
          </div>
          <div className={`${styles.projectImagePreviews}`}>
            <Image
              src={project.staticPreviews[3]}
              alt={`project ${project.name} preview image`}
            />
          </div>
        </div>
      </section>
      <InterestComponent />
    </section>
  );
}
