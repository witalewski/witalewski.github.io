import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { parseMediumFeed } from '../utils/mediumFeedParser';
import { MediumPost } from './MediumPost';
import { range } from '../utils/range';

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
          const result = parseMediumFeed(data);
          if (result.length > 3) {
            setMediumPosts(result.slice(0, 4));
          } else {
            setMediumPosts(result.slice(0, 2));
          }
        });
      setInitialized(true);
    }
  });

  const placeholder = (
    <div className="placeholder">
      <div className="placeholder-title" />
      <div className="placeholder-image" />
      <div className="placeholder-date" />
      <div className="placeholder-content" />
    </div>
  );

  return (
    <WritingStyled id="writing">
      <h2>Writing</h2>

      <ul className="medium-posts-list">
        {mediumPosts.length
          ? mediumPosts.map(post => (
              <li className="medium-posts-list__item" key={post.title}>
                <MediumPost post={post} />
              </li>
            ))
          : range(1, 2).map(i => (
              <li key={`placeholder-${i}`} className="medium-posts-list__item">
                {placeholder}
              </li>
            ))}
        }
      </ul>

      <div className="read-more">
        <a href="https://medium.com/@kriswitalewski">Read more on medium.com</a>
      </div>
    </WritingStyled>
  );
};
