import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../styles/index.module.scss"

const Header = () => {

    return(
      <header className={style.headerWrapper}>
        <div className={style.container}>
            <div className={style.flexContainer}>
                <Link to = "/">
                    <StaticImage src="../images/logo.png" alt="logo" quality={90} placeholder="blurred" formats={["AUTO","WEBP","AVIF"]}  width={50} />
                </Link>
                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contant</Link></li>
                </ul>
            </div>
        </div>
      </header>
    )
}

export default Header