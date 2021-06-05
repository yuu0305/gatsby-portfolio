import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Index = () => {
  return(
    <>
    <div>
      
      <StaticImage src="../images/index-hero.jpg" alt="hero"/>
      <div>
        <h1>I'm Yu Segawa!</h1>
        <h3>Developper js </h3>
      </div>
    </div>

    <div>
      <div>
        <div>
          <h2>js nerd</h2>
          <p>pompom</p>
        </div>
      </div>

      <div>
        <h2>Skills</h2>
        <div>
          <div><span>Js / react jquery  / 2years</span></div>
          <div><span>ruby / rails  / 2years</span></div>
          <div><span>Java </span></div>
        </div>
      </div>
      <div>
        <Link to="/contact">Make it Happen!</Link>
      </div>
    </div>
    </>
  )
}

export default Index