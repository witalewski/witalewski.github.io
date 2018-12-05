import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { InstagramPhoto } from './InstagramPhoto';

const CodeStyled = styled.section`
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
`;
export const Code = () => {
  const [initialized, setInitialized] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!initialized) {
      axios
        .get('https://api.github.com/users/witalewski/repos')
        .then(({ data }) => {
          console.log(data.filter(item => item.has_pages));
          setRepos(data);
        });
      setInitialized(true);
    }
  });

  return (
    <CodeStyled>
      <h2>Code</h2>
      {repos.length ? (
        <ul className="instagram-posts-list">
          {/* {repos.map(photo => (
            <li className="instagram-posts-list__item" key={photo.id}>
              <InstagramPhoto photo={photo} />
            </li>
          ))} */}
        </ul>
      ) : (
        'Loading...'
      )}
    </CodeStyled>
  );
};
