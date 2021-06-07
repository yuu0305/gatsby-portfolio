import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const SingleBlog = (props) =>{
    return (
        <>
        <div>
            <GatsbyImage image={props.data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData} alt="blog-image"/>
        </div>
        <div>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}} />
        </div>
        </>
    )
}

export default SingleBlog
export const query = graphql`
  query SingleBlogQuery ($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
        date
        excerpt
        id
        image {
            childImageSharp {
              gatsbyImageData(
                quality: 90,
                placeholder: BLURRED,
                formats: AUTO,
                width: 1000
              )
            }
          }
        title
    }
    html
    }
  }
  `