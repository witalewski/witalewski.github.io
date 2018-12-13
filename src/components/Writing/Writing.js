import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { WritingStyled } from './WritingStyled';
import { MediumPost } from './MediumPost';

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

export const Writing = ({ posts, n = 4, m = 2 }) => (
  <WritingStyled id="writing">
    <h2>Writing</h2>

    <ul className="medium-posts-list">
      {renderPostsOrPlaceholders(n, m)(posts)}
    </ul>

    <div className="read-more">
      <a href="https://medium.com/@kriswitalewski">Read more on medium.com</a>
    </div>
  </WritingStyled>
);

const mapStateToProps = state => ({
  posts: state.writing,
});

export const WritingConnected = connect(mapStateToProps)(Writing);
