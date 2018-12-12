import React from 'react';
import { MediumPostStyled } from './MediumPostStyled';
import { getRelativeDate } from '../utils/relativeDateFormatter';

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
