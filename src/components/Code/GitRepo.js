import React from 'react';
import { GitRepoStyled } from './GitRepoStyled';
import { getRelativeDate } from '../../utils/relativeDateFormatter';

const languageColors = {
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  TypeScript: '#2b7489',
};

export const GitRepo = ({ repo }) => (
  <GitRepoStyled>
    <h3 className="repo-name">
      <a href={repo.html_url}>{repo.name}</a>
    </h3>
    <p className="repo-description">{repo.description}</p>
    <p className="repo-details">
      <span
        className="repo-language-color"
        style={{ backgroundColor: languageColors[repo.language] }}
      />
      <span className="repo-language">{repo.language}</span>
      <span>Updated {getRelativeDate(repo.updated_at)}</span>
    </p>
  </GitRepoStyled>
);
