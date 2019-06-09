import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const GithubStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 0;
  padding: 0;
  max-width: 90%;
  width: 800px;

  list-style: none;
`;

const GithubItemStyled = styled.li`
  margin-bottom: 16px;
  flex-basis: calc(50% - 8px);
  padding: 16px;
  border: 1px solid rgb(209, 213, 218);
  border-radius: 3px;
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: black;
`;

const RepoNameStyled = styled.h3`
  font-weight: bold;
  color: #0366d6;
`;

const RepoDescriptionStyled = styled.p`
  font-size: 14px;
  color: #586069;
  margin: 8px 0 16px;
`;

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

export const Github = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { edges } = data.allPinnedRepo;
      return (
        <GithubStyled>
          {edges.map(({ node }) => {
            const { name, url, description } = node;
            return (
              <GithubItemStyled key={url}>
                <LinkStyled href={url}>
                  <RepoNameStyled>{name}</RepoNameStyled>
                  <RepoDescriptionStyled>{description}</RepoDescriptionStyled>
                </LinkStyled>
              </GithubItemStyled>
            );
          })}
        </GithubStyled>
      );
    }}
  />
);

export default Github;
