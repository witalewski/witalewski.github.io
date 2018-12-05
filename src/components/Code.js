import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { GitRepo } from './GitRepo';

const CodeStyled = styled.section`
  .instagram-posts-list {
    max-width: 100%;
    padding-left: 0;

    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    flex-wrap: wrap;

    list-style: none;
  }

  .instagram-posts-list__item {
    flex-basis: 48%;
    margin: 8px 2px;

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
          setRepos(
            data
              .filter(item => item.has_pages)
              .sort(
                (a, b) =>
                  new Date(b.updated_at).getTime() -
                  new Date(a.updated_at).getTime()
              )
          );
        });
      setInitialized(true);
    }
  });

  return (
    <CodeStyled>
      <h2>Code</h2>
      {repos.length ? (
        <ul className="instagram-posts-list">
          {repos.map(repo => (
            <li className="instagram-posts-list__item" key={repo.id}>
              <GitRepo repo={repo} />
            </li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </CodeStyled>
  );
};
