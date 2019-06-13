import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { shape, arrayOf, string } from 'prop-types';
import {
  GithubStyled,
  ItemStyled,
  LinkStyled,
  RepoNameStyled,
  RepoDescriptionStyled,
} from './GithubStyled';

const query = graphql`
  query PinnedRepos {
    allPinnedRepo {
      edges {
        node {
          name
          url
          description
          updatedAt(fromNow: true)
        }
      }
    }
  }
`;

const render = ({ allPinnedRepo: { edges } }) => (
  <GithubStyled>
    {edges.map(({ node }) => {
      const { name, url, description } = node;
      return (
        <ItemStyled key={url}>
          <LinkStyled href={url} rel="noopener">
            <RepoNameStyled>{name}</RepoNameStyled>
            <RepoDescriptionStyled>{description}</RepoDescriptionStyled>
          </LinkStyled>
        </ItemStyled>
      );
    })}
  </GithubStyled>
);
render.propTypes = {
  allPinnedRepo: shape({
    edges: arrayOf({
      node: shape({
        name: string,
        url: string,
        description: string,
      }),
    }),
  }).isRequired,
};

export const Github = () => <StaticQuery query={query} render={render} />;

export default Github;
