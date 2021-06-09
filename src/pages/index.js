import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// import JSLogo from "../images/javascript.svg"
// import ReactLogo from "../images/react.svg"
// import GatsbyLogo from "../images/gatsby.svg"
// import NextLogo from "../images/next.svg"
import * as style from "../styles/index.module.scss"

const Index = () => (
    <Layout>
      <div className={style.hero}>

        <StaticImage src="../images/index-hero.jpg" alt="hero" quality={90} placeholder="blurred" formats={["AUTO","WEBP","AVIF"]} className={style.heroImg}/>
        <div className={style.textContainer}>
          <h1>I'm Yu Segawa!</h1>
          <h3>Developper js </h3>
        </div>
      </div>

      <div className={style.textContainer}>
        <div className={style.profile}>
          <div>
            <h2>js nerd</h2>
            <p>pompom</p>
          </div>
          <StaticImage src="../images/image1.jpeg" alt="hero" quality={90} placeholder="blurred" formats={["AUTO","WEBP","AVIF"]} />
        </div>

        <div className={style.skills}>
          <h2>Skills</h2>
          <div className={style.skillsContainer}>
            <div><span>Js / react jquery  / 2years</span></div>
            <div><span>ruby / rails  / 2years</span></div>
            <div><span>Java </span></div>
          </div>
        </div>
        <div className={style.ctaButton}>
          <Link to="/contact">Make it Happen!</Link>
        </div>
      </div>
    </Layout>
)

export default Index