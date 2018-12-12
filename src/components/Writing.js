import React from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';
import { MediumPost } from './MediumPost';

const WritingStyled = styled.section`
  .medium-posts-list {
    max-width: 100%;
    padding-left: 0;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    list-style: none;
  }

  .medium-posts-list__item {
    flex-basis: 400px;
    overflow: hidden;
  }

  .read-more {
    width: 100%;
    text-align: center;
    margin-top: 48px;
  }

  .placeholder {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .placeholder-title {
    height: 44px;
    margin-bottom: 16px;
    background: #f0f0f0;
  }
  .placeholder-image {
    height: 266px;
    margin-bottom: 16px;
    background: #f0f0f0;
  }
  .placeholder-date {
    height: 17px;
    margin-bottom: 16px;
    background: #f0f0f0;
  }
  .placeholder-content {
    height: 51px;
    margin-bottom: 16px;
    background: #f0f0f0;
  }
`;

const renderPlaceholders = n =>
  R.always(
    R.map(
      i => (
        <li key={`placeholder-${i}`} className="medium-posts-list__item">
          <div className="placeholder">
            <div className="placeholder-title" />
            <div className="placeholder-image" />
            <div className="placeholder-date" />
            <div className="placeholder-content" />
          </div>
        </li>
      ),
      R.range(0, n)
    )
  );

const takeNorM = (n, m) =>
  R.ifElse(
    R.compose(
      R.lte(n),
      R.prop('length')
    ),
    R.take(n),
    R.take(m)
  );

const renderPosts = (n, m) =>
  R.compose(
    R.map(post => (
      <li className="medium-posts-list__item" key={post.title}>
        <MediumPost post={post} />
      </li>
    )),
    takeNorM(n, m)
  );

const renderPostsOrPlaceholders = (n, m) =>
  R.ifElse(R.isEmpty, renderPlaceholders(m), renderPosts(n, m));

export const Writing = ({ mediumPosts, n, m }) => (
  <WritingStyled id="writing">
    <h2>Writing</h2>

    <ul className="medium-posts-list">
      {renderPostsOrPlaceholders(n, m)(mediumPosts)}
    </ul>

    <div className="read-more">
      <a href="https://medium.com/@kriswitalewski">Read more on medium.com</a>
    </div>
  </WritingStyled>
);
