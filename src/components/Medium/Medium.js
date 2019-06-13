import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { shape, arrayOf, string } from 'prop-types';
import {
  MediumStyled,
  ItemStyled,
  ThumbnailStyled,
  LinkStyled,
  PostTitleStyled,
  DescriptionStyled,
} from './MediumStyled';

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

const render = ({ allMediumPost: { edges } }) => {
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
};
render.propTypes = {
  allMediumPost: shape({
    edges: arrayOf(
      shape({
        node: shape({
          title: string,
          uniqueSlug: string,
          virtuals: shape({
            subtitle: string,
            previewImage: shape({ imageId: string }),
          }),
        }),
      })
    ),
  }).isRequired,
};

export const Medium = () => <StaticQuery query={query} render={render} />;

export default Medium;
