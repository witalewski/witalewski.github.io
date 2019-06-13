import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  GithubStyled,
  ItemStyled,
  LinkStyled,
  RepoNameStyled,
  RepoDescriptionStyled,
} from './GithubStyled';

export const Github = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const { edges } = data.allPinnedRepo;
      return (
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
    }}
  />
);

export default Github;
