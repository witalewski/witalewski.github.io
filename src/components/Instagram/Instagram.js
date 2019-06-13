import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  InstagramStyled,
  ThumbnailStyled,
  ItemStyled,
} from './InstagramStyled';

export const Instagram = () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(sort: { fields: [timestamp], order: DESC }) {
          edges {
            node {
              id
              caption
              thumbnails {
                src
                config_width
                config_height
              }
            }
          }
        }
      }
    `}
    render={({ allInstaNode: { edges } }) => (
      <InstagramStyled>
        {edges.map(({ node: { thumbnails, id, caption } }) => {
          const { src } = thumbnails.find(el => el.config_width === 320);
          return (
            <ItemStyled key={src}>
              <a href={`https://www.instagram.com/p/${id}/`} rel="noopener">
                <ThumbnailStyled
                  src={src}
                  alt={`Instagram image: ${caption} | @nihilismislove | Adam Witalewski`}
                />
              </a>
            </ItemStyled>
          );
        })}
      </InstagramStyled>
    )}
  />
);

export default Instagram;
