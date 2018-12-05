import React from 'react';
import styled from '@emotion/styled';

const MediumPostStyled = styled.div`
  .thumbnail {
    width: 100%;
  }

  .content {
    
  }
  .read-more {
      display: inline-block;
      width: 100%;
      text-align: right;
  }
`;
export const MediumPost = ({ post }) => (
  <MediumPostStyled>
    <h3>
      <a href={post.link}>{post.title}</a>
    </h3>
    <a href={post.link}>
      <img className="thumbnail" src={post.image} alt={post.title} />
    </a>
    <div className="content">{post.content} <span className="read-more"><a href={post.link}>Read more</a></span></div>
  </MediumPostStyled>
);
