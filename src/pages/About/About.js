import styles from "./Aboutus.module.scss";
import Footer from "../../Components/Footer/Footer";

import img1 from "../../Assets/ImgPeople/PeopleMM1.jpg";
import img2 from "../../Assets/ImgPeople/PeopleMM2.jpg";
import img3 from "../../Assets/ImgPeople/PeopleMM3.jpg";
import img4 from "../../Assets/ImgPeople/PeopleSG.jpg";
import img5 from "../../Assets/ImgPeople/PeopleSG1.jpg";
import img6 from "../../Assets/ImgPeople/PeopleSG2.jpg";
import img7 from "../../Assets/ImgPeople/People2.jpg";
import img8 from "../../Assets/ImgPeople/People3.jpg";
import img9 from "../../Assets/ImgPeople/PeopleSG3.jpg";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.animation}>
          <span>IORDACHE CATALIN</span>
          <p className={styles.paragraph}>Proiect examen</p>
        </div>

        <div className={styles.aboutBox}>
          <div className={styles.aboutInsideBox}>
            <img src={img3} alt="people" />
            <div className={styles.boxText}>
              This is my fabulous text.I love my wonderful project. I love my
              future job.
            </div>
          </div>
          <div className={styles.aboutInsideBox2}>
            <img src={img7} alt="people" />
            <div className={styles.boxText}>
              I love my future job.I love what I do very much.This is my
              fabulous text.
            </div>
          </div>
          <div className={styles.aboutInsideBox3}>
            <img src={img4} alt="people" />
            <div className={styles.boxTitle}>Jena Smith - CEO</div>
            <div className={styles.boxText}>
              The best in this field. She loves what she does. And more
              descriptions.
            </div>
          </div>
        </div>
        <div className={styles.aboutBox}>
          <div className={styles.aboutInsideBox2}>
            <img src={img8} alt="people" />
            <div className={styles.boxText}>
              I love my future job.I love what I do very much.This is my
              fabulous text.
            </div>
          </div>
          <div className={styles.aboutInsideBox3}>
            <img src={img5} alt="people" />
            <div className={styles.boxTitle}>Jonh Nash - Business adviser</div>
            <div className={styles.boxText}>
              The best in this field. She loves what she does. And more
              descriptions.
            </div>
          </div>
          <div className={styles.aboutInsideBox}>
            <img src={img6} alt="people" />
            <div className={styles.boxText}>
              This is my fabulous text.I love my wonderful project.I love my
              future job.I love what I do very much.This is my fabulous text.
            </div>
          </div>
        </div>
        <div className={styles.aboutBox}>
          <div className={styles.aboutInsideBox}>
            <img src={img1} alt="people" />
            <div className={styles.boxText}>
              This is my fabulous text.I love my wonderful project.I love my
              future job.
            </div>
          </div>
          <div className={styles.aboutInsideBox2}>
            <img src={img9} alt="people" />
            <div className={styles.boxText}>
              I love my future job.I love what I do very much.This is my
              fabulous text.
            </div>
          </div>
          <div className={styles.aboutInsideBox3}>
            <img src={img2} alt="people" />
            <div className={styles.boxTitle}>This si our team</div>
            <div className={styles.boxText}>
              The best team in this field. They love what they do. And more
              descriptions.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default About;
