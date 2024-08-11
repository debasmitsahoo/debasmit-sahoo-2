import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/newimg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const {theme, toggleTheme } = useTheme();

    const themeIcon = theme === "light" ? sun : moon;
    const twitterIcon = theme === "light" ? twitterLight : 
    twitterDark;
    const githubIcon = theme === "light" ? githubLight : 
    githubDark;
    const LinkedinIcon = theme === "light" ? linkedinlight :
    linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of Debasmit Sahoo"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Debasmit
          <br />
          Sahoo
        </h1>
        <h2>Front-End Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am a Front-End Developer with a passion for creating beautiful and
          functional user interfaces. 
        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
