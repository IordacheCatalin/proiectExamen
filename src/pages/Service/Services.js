import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Services.module.scss";
import Footer from "../../Components/Footer/Footer";

import img1 from "../../Assets/Images/1carusel.jpg";
import img2 from "../../Assets/Images/2carusel.jpg";
import img3 from "../../Assets/Images/3carusel.jpg";
import img4 from "../../Assets/Images/4carusel.jpg";
import img5 from "../../Assets/Images/5carusel.jpg";
import img6 from "../../Assets/Images/6carusel.jpg";
import img7 from "../../Assets/Images/7carusel.jpg";
import img8 from "../../Assets/Images/8carusel.jpg";
import img9 from "../../Assets/Images/9carusel.jpg";
import img10 from "../../Assets/Images/10carusel.jpg";
import img11 from "../../Assets/Images/Laptop-Repair.jpg";
import img12 from "../../Assets/Images/assambly.jpg";
import img13 from "../../Assets/Images/customPC.jpg";

const Services = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Carousel md>
            <div>
              <img src={img1} alt="Carousel 1 img" />

              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img2} alt="Carousel 2 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img3} alt="Carousel 3 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img4} alt="Carousel 4 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img5} alt="Carousel 5 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img6} alt="Carousel 6 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img7} alt="Carousel 7 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img8} alt="Carousel 8 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img9} alt="Carousel 9 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
            <div>
              <img src={img10} alt="Carousel 10 img" />
              <p
                className="legend"
                style={{ color: "rgb(0, 98, 202)", fontSize: "24px" }}
              >
                Iordache Catalin project!
              </p>
            </div>
          </Carousel>
        </div>
        
        <div className={styles.overflow}>
          <div className={styles.card}>
            <img src={img11} alt="Carousel 10 img" />

            <div className={styles.title}>
              Qualified and able to respond in a dynamic and professional manner
              to all requests
            </div>
            <div className={styles.text}>
              CG&GC HiTech Solutions is an authorized service partner for Dell
              and Lenovo laptops, computer systems and graphic workstations, for
              the business product ranges. Dell – Latitude, Precision, Optiplex
              product ranges LENOVO – ThinkCentre, ThinkPad product lines
            </div>
            <div className={styles.text2}>Iordache Catalin project !</div>
            <div className={styles.icon}>
            <i class="fa-brands fa-square-facebook fa-2x"></i>
            <i class="fa-regular fa-envelope-open fa-2x"></i>
            <i class="fa-brands fa-pinterest fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
            <i class="fa-brands fa-tiktok fa-2x"></i>
            <i class="fa-brands fa-whatsapp fa-2x"></i>
            </div>
          </div>

          <div className={styles.card}>
            <img src={img12} alt="Carousel 10 img" />

            <div className={styles.title}>
              Qualified and able to respond in a dynamic and professional manner
              to all requests
            </div>
            <div className={styles.text}>
              CG&GC HiTech Solutions is an authorized service partner for Dell
              and Lenovo laptops, computer systems and graphic workstations, for
              the business product ranges. Dell – Latitude, Precision, Optiplex
              product ranges LENOVO – ThinkCentre, ThinkPad product lines
            </div>
            <div className={styles.text2}>Iordache Catalin project !</div>
            <div className={styles.icon}>
            <i class="fa-brands fa-square-facebook fa-2x"></i>
            <i class="fa-regular fa-envelope-open fa-2x"></i>
            <i class="fa-brands fa-pinterest fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
            <i class="fa-brands fa-tiktok fa-2x"></i>
            <i class="fa-brands fa-whatsapp fa-2x"></i>
            </div>
          </div>

          <div className={styles.card}>
            <img src={img13} alt="Carousel 10 img" />

            <div className={styles.title}>
              Qualified and able to respond in a dynamic and professional manner
              to all requests
            </div>
            <div className={styles.text}>
              CG&GC HiTech Solutions is an authorized service partner for Dell
              and Lenovo laptops, computer systems and graphic workstations, for
              the business product ranges. Dell – Latitude, Precision, Optiplex
              product ranges LENOVO – ThinkCentre, ThinkPad product lines
            </div>
            <div className={styles.text2}>Iordache Catalin project !</div>
            <div className={styles.icon}>
            <i class="fa-brands fa-square-facebook fa-2x"></i>
            <i class="fa-regular fa-envelope-open fa-2x"></i>
            <i class="fa-brands fa-pinterest fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
            <i class="fa-brands fa-tiktok fa-2x"></i>
            <i class="fa-brands fa-whatsapp fa-2x"></i>
            </div>
            <div>
            
            </div>
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
};
export default Services;
