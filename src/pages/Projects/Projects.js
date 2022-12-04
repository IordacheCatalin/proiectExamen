import React from "react";
import styles from "./Projects.module.scss";
import Project from "./projects.json";
import { Carousel } from "react-responsive-carousel";

function ProjectsPC() {
  return (
    <div className={styles.container}>
      {Project &&
        Project.map((project) => {
          return (
            <div className={styles.project} key={project.id}>
              <Carousel>
                <img src={project.image} alt="Proiect 1 " />
                <img src={project.image1} alt="Proiect 1 " />
                <img src={project.image2} alt="Proiect 1 " />
                <img src={project.image3} alt="Proiect 1 " />
                <img src={project.image4} alt="Proiect 1 " />
                <img src={project.image5} alt="Proiect 1 " />
              </Carousel>

              <div className={styles.title}>{project.title}</div>
              <div className={styles.description}>{project.description}</div>

              <div>
                <div className={styles.techPrice}>Technical specification</div>

                <table>
                  <tr>
                    <td>Procesor</td>
                    <td>{project.procesor}</td>
                    <td>Specification Data</td>
                  </tr>

                  <tr>
                    <td>Matherboard</td>
                    <td>{project.placaDeBaza}</td>
                    <td>Specification Data</td>
                  </tr>

                  <tr>
                    <td>Memory</td>
                    <td>{project.memorieRam}</td>
                    <td>Specification Data</td>
                  </tr>

                  <tr>
                    <td>Case</td>
                    <td>{project.carcasa}</td>
                    <td>Specification Data</td>
                  </tr>

                  <tr>
                    <td>Power supply</td>
                    <div>{project.sursa}</div>
                    <td>Specification Data</td>
                  </tr>

                  <tr>
                    <td>Video Card</td>
                    <td>{project.placaVideo}</td>
                    <td>Specification Data</td>
                  </tr>

                  <tr>
                    <td>Cooling type</td>
                    <td>{project.racire}</td>
                    <td>Specification Data</td>
                  </tr>
                </table>
              </div>

              <div
                className={styles.techPrice}
                style={{ color: "red", fontWeight: "600", marginTop: "15px" }}
              >
                Price is : {project.price}
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default ProjectsPC;
