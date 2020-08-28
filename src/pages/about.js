import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/default'

const AboutPage = ({data}) => (
  <Layout>
    <article className="about">
      <Img
        alt={data.takeshape.about.portrait.description}
        fixed={data.takeshape.about.portrait.fixed}
      />
      <div
        className="about__biography"
        dangerouslySetInnerHTML={{__html: data.takeshape.about.biography}}
      />
    </article>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    takeshape {
      about: getAbout {
        biography: biographyHtml
        portrait {
          title
          description
          path
          fixed(height: 150, width: 150) {
            ...GatsbyTakeShapeImageFixed
          }
        }
      }
    }
  }
`
