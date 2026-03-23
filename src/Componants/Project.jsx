import css from "./Project.module.css";
import VisibilityWrapper from "./VisibilityWrapper";
import { ExternalLink, Github } from "lucide-react";
import ProImg1 from "../assets/Da.png";
import ProImg2 from "../assets/image.png";
import ProImg3 from "../assets/jarvis.png";
import ProImg4 from "../assets/Fruits.jpeg";

const projects = [
  {
    title: "Quote Website",
    image: ProImg1,
    variant: "quote",
    githubUrl: "https://github.com/Amisha65/daily_quotes",
    demoUrl: "https://daily-quotes-app-lake.vercel.app",
  },
  {
    title: "Jarvis- AI Assistance",
    image: ProImg3,
    variant: "jarvis",
    githubUrl: "https://github.com/Amisha65/Jarvis-AI-Assistance.git",
  },
  {
    title: "Fruit Maturity Detection",
    image: ProImg4,
    variant: "fruit",
    githubUrl:
      "https://github.com/Amisha65/Fruit-Maturity-Detection-Using-MicroViT-and-Scientech-Scientech-6205AI.git",
  },
  {
    title: "Be Bold website",
    image: ProImg2,
    variant: "bebold",
    githubUrl: "https://github.com/Amisha65/E-Commerce-Website--Beauty-Products",
    demoUrl: "https://ecommerce-beauty-products.vercel.app",
  },
];

const Project = () => {
  return (
    <>
      <div className={`${css.containerBox} container-fluid py-5 my-5`}>
        <div className="container">
          <div className="row">
            <VisibilityWrapper delay={0.13} fullWidth>
              <div
                className={`${css.projectHeader} col-12 d-flex justify-content-center align-items-center`}
              >
                <h1 className={`${css.skillTitle}`}>Project Experience </h1>
              </div>
            </VisibilityWrapper>
            <VisibilityWrapper delay={0.11} fullWidth>
              <div className={css.projectGrid}>
                {projects.map((project) => (
                  <article key={project.title} className={css.projectCard}>
                    <div
                      className={`${css.projectMedia} ${
                        project.variant === "bebold" ? css.beBoldMedia : ""
                      }`}
                    >
                      <img
                        className={`${css.projectImage} ${
                          project.variant === "bebold" ? css.beBoldImage : ""
                        }`}
                        src={project.image}
                        alt={project.title}
                      />

                      <div className={css.projectActions}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={css.projectLink}
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={css.projectLink}
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        ) : null}
                      </div>

                      <div className={css.projectOverlay}></div>
                      <h3
                        className={`${css.projectTitle} ${
                          project.variant !== "jarvis" ? css.darkProjectTitle : ""
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </VisibilityWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
