import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import * as R from 'ramda';
import { GitRepo } from './GitRepo';
import { displayedRepos } from '../setup';

const CodeStyled = styled.section`
  .repos-list {
    max-width: 100%;
    padding-left: 0;

    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    flex-wrap: wrap;

    list-style: none;
  }

  .repos-list__item {
    flex-basis: 48%;
    margin: 8px 2px;

    overflow: hidden;
  }

  .placeholder {
    height: 126px;
    background: #f0f0f0;
  }

  .read-more {
    width: 100%;
    text-align: center;
    margin-top: 48px;
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
          setRepos(
            data.filter(({ name }) => displayedRepos.indexOf(name) > -1)
          );
        });
      setInitialized(true);
    }
  });

  return (
    <CodeStyled id="code">
      <h2>Code</h2>
      <ul className="repos-list">
        {repos.length
          ? R.map(repo => (
              <li className="repos-list__item" key={repo.id}>
                <GitRepo repo={repo} />
              </li>
            ))(repos)
          : R.map(
              i => (
                <li key={`repo-placeholder-${i}`} className="repos-list__item">
                  <div className="placeholder" />
                </li>
              ),
              R.range(0, 4)
            )}
      </ul>
      <div className="read-more">
        <a href="https://github.com/witalewski">See more on github.com</a>
      </div>
    </CodeStyled>
  );
};
