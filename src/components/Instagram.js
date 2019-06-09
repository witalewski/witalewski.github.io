import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const InstagramStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 0;
  padding: 0;
  max-width: 90%;
  width: 800px;

  list-style: none;
`;

const InstagramItemStyled = styled.li`
  flex-basis: calc(33.33% - 1.33px);

  margin: 0;
  padding: 0;
`;

const InstagramThumbnail = styled.img`
  width: 100%;
`;

const query = graphql`
  query {
    allInstaNode(sort: { fields: [timestamp], order: DESC }) {
      edges {
        node {
          thumbnails {
            src
            config_width
            config_height
          }
        }
      }
    }
  }
`;

export const Instagram = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { edges } = data.allInstaNode;
      return (
        <InstagramStyled>
          {edges.map(({ node }) => {
            const { thumbnails } = node;
            const { src } = thumbnails.find(el => el.config_width === 640);
            return (
              <InstagramItemStyled key={src}>
                <InstagramThumbnail src={src} />
              </InstagramItemStyled>
            );
          })}
        </InstagramStyled>
      );
    }}
  />
);

export default Instagram;
