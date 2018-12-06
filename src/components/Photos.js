import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
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
    background: #f0f0f0;
}

  .read-more {
    width: 100%;
    text-align: center;
  }
`;
export const Photos = () => {
  const [initialized, setInitialized] = useState(false);
  const [instagramPhotos, setInstagramPhotos] = useState([]);

  useEffect(() => {
    if (!initialized) {
      axios
        .post(
          'https://qw6c0mxwz9.execute-api.eu-west-1.amazonaws.com/default/lightswitch',
          JSON.stringify({
            instagram: true,
          }),
          {
            headers: {
              'X-Api-Key': 'S0a5WCywb68N075YgoTVK3TidPB11bus2vplyW9s',
              'Content-Type': 'application/json',
            },
          }
        )
        .then(({ data: { data } }) => {
          setInstagramPhotos(data.slice(0, -5));
        });
      setInitialized(true);
    }
  });

  return (
    <PhotosStyled id="photos">
      <h2>Photos</h2>
      {instagramPhotos.length ? (
        <ul className="instagram-posts-list">
        {instagramPhotos.map(photo => (
          <li className="instagram-posts-list__item" key={photo.id}>
            <InstagramPhoto photo={photo} />
          </li>
        ))}
      </ul>
      ) : (
        <ul className="instagram-posts-list">
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
            <li className="instagram-posts-list__item">
              <div className="placeholder"/>
            </li>
        </ul>
      )}<div className="read-more">
      <a href="https://instagram.com/nihilismislove">See more on instagram.com</a>
    </div>
    </PhotosStyled>
  );
};
