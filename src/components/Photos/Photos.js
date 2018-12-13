import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { PhotosStyled } from './PhotosStyled';
import { InstagramPhoto } from './InstagramPhoto';

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

export const Photos = ({ photos, photosCount = 15 }) => (
  <PhotosStyled id="photos">
    <h2>Photos</h2>
    <ul className="instagram-posts-list">
      {renderPhotosOrPlaceholders(photosCount)(photos)}
    </ul>
    <div className="read-more">
      <a href="https://instagram.com/nihilismislove">
        See more on instagram.com
      </a>
    </div>
  </PhotosStyled>
);

const mapStateToProps = state => ({
  photos: state.photos,
});

export const PhotosConnected = connect(
  mapStateToProps,
)(Photos);