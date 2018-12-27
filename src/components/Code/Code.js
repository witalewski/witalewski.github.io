import React from 'react';
import * as R from 'ramda';
import { GitRepo } from './GitRepo';
import { CodeStyled } from './CodeStyled';

const renderPlaceholders = n =>
  R.always(
    R.map(
      i => (
        <li key={`repo-placeholder-${i}`} className="repos-list__item">
          <div className="placeholder" />
        </li>
      ),
      R.range(0, n)
    )
  );

const renderRepos = R.map(repo => (
  <li className="repos-list__item" key={repo.id}>
    <GitRepo repo={repo} />
  </li>
));

const renderReposOrPlaceholders = n =>
  R.ifElse(R.isEmpty, renderPlaceholders(n), renderRepos);

export const Code = ({ repos, reposCount }) => (
  <CodeStyled id="code">
    <h2 className="title">Code</h2>
    <ul className="repos-list">
      {renderReposOrPlaceholders(reposCount)(repos)}
    </ul>
    <div className="read-more">
      <a href="https://github.com/witalewski">See more on github.com</a>
    </div>
  </CodeStyled>
);
