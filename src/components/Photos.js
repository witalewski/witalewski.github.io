import React from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';
import { InstagramPhoto } from './InstagramPhoto';

const PhotosStyled = styled.section`
  .instagram-posts-list {
    max-width: 100%;
    padding-left: 0;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    list-style: none;
  }

  .instagram-posts-list__item {
    flex-basis: 32.5%;
    overflow: hidden;
  }

  .placeholder {
    height: 300px;
  }

  .placeholder--inner {
    width: 100%;
    height: 200px;
    margin-top: 50px;
    background: #f0f0f0;
  }

  .read-more {
    width: 100%;
    text-align: center;
  }
`;

const renderPlaceholders = n =>
  R.always(
    R.map(i => (
      <li key={`image-placeholder-${i}`} className="instagram-posts-list__item">
        <div className="placeholder">
          <div className="placeholder--inner" />
        </div>
      </li>
    ))(R.range(0, n))
  );

const renderPhotos = n =>
  R.compose(
    R.map(photo => (
      <li className="instagram-posts-list__item" key={photo.id}>
        <InstagramPhoto photo={photo} />
      </li>
    )),
    R.take(n)
  );

const renderPhotosOrPlaceholders = n =>
  R.ifElse(R.isEmpty, renderPlaceholders(n), renderPhotos(n));

export const Photos = ({ instagramPhotos, n }) => (
  <PhotosStyled id="photos">
    <h2>Photos</h2>
    <ul className="instagram-posts-list">
      {renderPhotosOrPlaceholders(n)(instagramPhotos)}
    </ul>
    <div className="read-more">
      <a href="https://instagram.com/nihilismislove">
        See more on instagram.com
      </a>
    </div>
  </PhotosStyled>
);
