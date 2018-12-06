import React from 'react';
import styled from '@emotion/styled';
import { getRelativeDate } from '../utils/relativeDateFormatter';

const MediumPostStyled = styled.div`
  margin: 0 16px;

  .thumbnail {
    width: 100%;
  }

  .date {
    margin: 16px 0;
    font-size: 14px;
    color: #586069;
  }

  .content {
    font-size: 14px;
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
    <div className="date">{getRelativeDate(post.date)}</div>
    <div className="content">{post.content}</div>
  </MediumPostStyled>
);
