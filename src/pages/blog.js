import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Blog = (props) => {
    // console.log(props)

    return(
      <>
      <div>
        <div>
          <h1>blog</h1>
            <p>WEB系エンジニアの日常をお届けします</p>
            {props.data.allMarkdownRemark.edges.map((singleBlog, index)=>
              // {console.log(singleBlog)}
              <div key={index}>
                <h3>{singleBlog.node.frontmatter.title}</h3>
                <p>{singleBlog.node.frontmatter.excerpt}</p>
                <p>{singleBlog.node.frontmatter.date}</p>
                <Link  to={singleBlog.node.fields.slug}>Read More</Link>
                <GatsbyImage image={singleBlog.node.frontmatter.image.childImageSharp.gatsbyImageData} alt="card-image" />
              </div>
            )}
        </div>
      </div>
      </>
    )
}

export default Blog
export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}){
      edges {
        node {
          frontmatter {
            date
            excerpt
            id
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: AUTO, quality: 90)
              }
            }
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `