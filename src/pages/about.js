import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <h2>{data.site.siteMetadata.title}</h2>
    <div>{data.site.siteMetadata.description}</div>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const query = graphql `
  query {
    site {
      siteMetadata {
        author,
        description,
        title
      }
    }
  }
`