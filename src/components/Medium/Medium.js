import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  MediumStyled,
  ItemStyled,
  ThumbnailStyled,
  LinkStyled,
  PostTitleStyled,
  DescriptionStyled,
} from './MediumStyled';

export const Medium = () => (
  <StaticQuery
    query={graphql`
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
    `}
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
            }) => (
              <ItemStyled key={title}>
                <LinkStyled
                  href={`https://medium.com/@awitalewski/${uniqueSlug}`}
                  rel="noopener"
                >
                  <PostTitleStyled>{title}</PostTitleStyled>
                  <ThumbnailStyled
                    src={`https://cdn-images-1.medium.com/max/360/${imageId}`}
                    alt={`Illustration for blog post: ${title}`}
                  />
                  <DescriptionStyled>{subtitle}</DescriptionStyled>
                </LinkStyled>
              </ItemStyled>
            )
          )}
        </MediumStyled>
      );
    }}
  />
);

export default Medium;
