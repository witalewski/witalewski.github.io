import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { parseMediumFeed } from '../utils/mediumFeedParser';
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
`;
export const Writing = () => {
  const [initialized, setInitialized] = useState(false);
  const [mediumPosts, setMediumPosts] = useState([]);

  useEffect(() => {
    if (!initialized) {
      axios
        .post(
          'https://qw6c0mxwz9.execute-api.eu-west-1.amazonaws.com/default/lightswitch',
          JSON.stringify({
            medium: true,
          }),
          {
            headers: {
              'X-Api-Key': 'S0a5WCywb68N075YgoTVK3TidPB11bus2vplyW9s',
              'Content-Type': 'application/json',
            },
          }
        )
        .then(({ data }) => {
          setMediumPosts(parseMediumFeed(data));
        });
      setInitialized(true);
    }
  });

  return (
    <WritingStyled>
      <h2>Writing</h2>
      {mediumPosts.length ? (
        <ul className="medium-posts-list">
          {mediumPosts.map(post => (
            <li className="medium-posts-list__item" key={post.title}>
              <MediumPost post={post} />
            </li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </WritingStyled>
  );
};
