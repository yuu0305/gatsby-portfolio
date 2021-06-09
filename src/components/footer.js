import * as React from "react"
import { Link } from "gatsby"
import github from "../images/github.svg"
import linkdin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import * as style from "../styles/index.module.scss"

const Footer = () => {

    return(
      <>
      <footer>
            <div>
                <a href="https://www.google.com"><img src={github} alt="logo"/></a>
                <a href="https://www.google.com"><img src={linkdin} alt="logo"/></a>
                <a href="https://www.google.com"><img src={twitter} alt="logo"/></a>
                <a href="https://www.google.com"><img src={facebook} alt="logo"/></a>
                <Link to = "/blog">Blog</Link>
                <Link to = "/contact">Contact</Link>
                <p>©︎{new Date().getFullYear()} Yu Segawa</p>
            </div>
      </footer>
      </>
    )
}

export default Footer