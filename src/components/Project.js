import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/default'

export const ProjectMetadata = ({startDate, endDate, client}) => {
  const startYear = new Date(startDate).getFullYear()
  const endYear = endDate ? new Date(endDate).getFullYear() : null
  const includeEndYear = endYear && startYear !== endYear
  return (
    <div className="project__metadata">
      <p className="project__metadata">
        {startYear}
        {includeEndYear ? `&endash; ${endYear}` : ``}
      </p>
      {client ? (
        <p>
          <a href={client.url} target="_blank" rel="noopener noreferrer">
            {client.name}
          </a>
        </p>
      ) : (
        ``
      )}
    </div>
  )
}

export const Project = ({project}) => (
  <article className="project">
    <header>
      {project.coverImage ? (
        <Img className="project__cover-image" fluid={project.coverImage.fluid} />
      ) : (
        ``
      )}
      <h1>{project.name}</h1>
      <ProjectMetadata
        startDate={project.startDate}
        endDate={project.endDate}
        client={project.client}
      />
    </header>
    <div className="project__description" dangerouslySetInnerHTML={{__html: project.description}} />
  </article>
)

export default ({data}) => (
  <Layout>
    <Project project={data.takeshape.project} />
  </Layout>
)

export const query = graphql`
  query($projectId: ID!) {
    takeshape {
      project: getProject(_id: $projectId) {
        name
        startDate
        endDate
        coverImage {
          description
          path
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        client {
          name
          url
        }
        description: descriptionHtml
      }
    }
  }
`
