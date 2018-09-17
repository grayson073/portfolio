import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styles from '../scss/index.scss';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';

export default class index extends PureComponent {

  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const biography = this.props.data.allContentfulBio.edges[0].node.biography.biography;

    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="" />
      <meta name="geo.region" content="US-OR" />
      <meta name="geo.placename" content="Portland" />
      <title>Kevin Grayson: Full Stack Developer</title>
    </Helmet>;

    return (
      <div className={styles}>
        <Sidebar/>
        <Home biography={biography}/>        
      </div>
    );
  }
}

export const query = graphql`
  query AboutQuery {
    allContentfulBio {
      edges {
        node {
          biography {
            biography
          }
        }
      }
    }
  }
`;