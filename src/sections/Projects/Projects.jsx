import styles from "./ProjectsStyles.module.css";
import pms from "../../assets/PMSImage-removebg-preview.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pms}
          link="https://github.com/debasmitsahoo/Patient-Management-System"
          h3="PMS"
          p="Patient Management System "
        />
        
      </div>
    </section>
  );
}

export default Projects;
