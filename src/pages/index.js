import * as React from "react"
import { Link } from "gatsby"
import * as style from "../styles/index.module.css"

const Index = () => {
  return(
    <div>
      <h1 className={style.example}>hello world</h1>
      <Link to="/contact">contactページへ</Link>
    </div>
  )
}

export default Index