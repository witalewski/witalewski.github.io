import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const MediumStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 888px) {
    justify-content: center;
  }

  margin: 0;
  padding: 0;
  max-width: 90%;
  width: 800px;

  list-style: none;
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: black;
`;

const MediumItemStyled = styled.li`
  flex-basis: calc(50% - 40px);
  min-width: 360px;
  @media (max-width: 420px) {
    flex-basis: 100%;
    min-width: auto;
  }

  margin: 20px 20px 60px;
  padding: 0;
`;

const PostTitle = styled.h3`
  height: 48px;
  margin: 0 0 18px;

  font-weight: bold;
  font-size: 16px;
  color: #0366d6;
`;

const MediumThumbnail = styled.img`
  width: 100%;
`;

const DescriptionStyled = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
`;

const query = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`;

export const Medium = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { edges } = data.allMediumPost;
      return (
        <MediumStyled>
          {edges.map(
            ({
              node: {
                title,
                uniqueSlug,
                virtuals: {
                  subtitle,
                  previewImage: { imageId },
                },
              },
            }) => {
              return (
                <MediumItemStyled key={title}>
                  <LinkStyled
                    href={`https://medium.com/@awitalewski/${uniqueSlug}`}
                  >
                    <PostTitle>{title}</PostTitle>
                    <MediumThumbnail
                      src={`https://cdn-images-1.medium.com/max/360/${imageId}`}
                      alt={`Illustration for blog post: ${title}`}
                    />
                    <DescriptionStyled>{subtitle}</DescriptionStyled>
                  </LinkStyled>
                </MediumItemStyled>
              );
            }
          )}
        </MediumStyled>
      );
    }}
  />
);

export default Medium;
