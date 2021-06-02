import * as React from "react"
import { graphql, Link } from "gatsby"

const Blog = (props) => {
    // console.log(props)

    return(
      <div>
        <h1>blog</h1>
          {props.data.allMarkdownRemark.edges.map((singleBlog, index)=>
            // {console.log(singleBlog)}
            <div key={index}>
              <Link  to={singleBlog.node.fields.slug}><h2>{singleBlog.node.frontmatter.title}</h2></Link>
              <h2>{singleBlog.node.frontmatter.title}</h2>
              <p>{singleBlog.node.frontmatter.date}</p>
            </div>
          )}
      </div>
    )
}

export default Blog
export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            ecerpt
            id
            image
            title
          }
        }
      }
    }
  }
  `