import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export default class projects extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const projects = this.props.data.allContentfulProject.edges;

    return (
      <div>
        <img src={projects[0].node.images[0].image.file.url}/>
      </div>
    );
  }
}

export const query = graphql `
query getAllProjects {
    allContentfulProject {
      edges {
        node {
          title
          technology
          developers {
            id
            name
            linkedIn
            gitHub
            headshotUrl
          }
          images {
            id
            title
            altText
            image {
              id
              file {
                url
              }
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`;