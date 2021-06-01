import * as React from "react"
import { graphql } from "gatsby"

const SingleBlog = (props) =>{
    return (
        <div>
          <h1>記事ページ</h1>
          {console.log(props)}
        </div>
    )
}

export default SingleBlog
export const query = graphql`
query SingleBlogQuery {
    markdownRemark {
      frontmatter {
        date
        ecerpt
        id
        image
        title
      }
      html
    }
  }
`