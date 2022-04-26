import { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./About.module.css";


export default function About() {
  return (
    <Fragment>
      <NavBar />
      <div className={styles.mainConteinerAbout}>
        <h6>Developed by: Pablo Gribaudo</h6>
        <h6>
          Full Stack Developer | JavaScript
        </h6>
        <br />
        <p>
        I am a future javascript web developer, passionate about code.
        </p>
        <br />
        <p>
          I started learning code in 2021, before I was dedicated to the gastronomy area. In the not too distant future I would like to teach and dedicate my life to programming
        </p>
        <br />
        <p>Skills: CSS, HTML, JavaScript, SQL, React.js, Redux, Sequelize, Express.</p>
        <br />
        <br />
        <div className={styles.links}>
          <h6>Contact :</h6>
          <div className={styles.linksItems}>
            <p>
              <a href="https://github.com/Gribaudopablo/" target='_blank' rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/pablo-gribaudo-b2ab29185/" target='_blank' rel="noreferrer">
                LinkedIn
              </a>
            </p>
            </div>
        </div>
      </div>
    </Fragment>
  );
}
