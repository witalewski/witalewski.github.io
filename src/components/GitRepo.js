import React from 'react';
import styled from '@emotion/styled';
import { getRelativeDate } from '../utils/relativeDateFormatter';

const GitRepoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  height: 100%;
  padding: 12px;

  border: solid 1px #d1d5da;

  font-size: 14px;
  color: #586069;

  .repo-name {
    margin: 0;
    font-size: 16px;
  }

  .repo-description {
    margin-top: 8px;
    margin-bottom: 16px;
  }

  .repo-details {
    margin: 0;
  }

  .repo-language-color {
    border-radius: 50%;
    margin-right: 4px;
    display: inline-block;
    height: 12px;
    position: relative;
    top: 1px;
    width: 12px;
  }

  .repo-language {
    margin-right: 12px;
  }
`;
const languageColors = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
};
export const GitRepo = ({ repo }) => (
  <GitRepoStyled>
    <h3 className="repo-name">
      <a href={repo.url}>{repo.name}</a>
    </h3>
    <p className="repo-description">{repo.description}</p>
    <p className="repo-details">
      <span
        className="repo-language-color"
        style={{ backgroundColor: languageColors[repo.language] }}
      />
      <span className="repo-language">{repo.language}</span>
      <span>
        Updated { getRelativeDate(repo.updated_at) }
      </span>
    </p>
  </GitRepoStyled>
);
