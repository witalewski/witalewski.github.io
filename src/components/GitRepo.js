import React from 'react';
import styled from '@emotion/styled';

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
`;
export const GitRepo = ({ repo }) => (
  <GitRepoStyled>
    <h3 className="repo-name">
      <a href={repo.url}>{repo.name}</a>
    </h3>
    <p className="repo-description">{repo.description}</p>
    <p className="repo-details">{repo.language}</p>
  </GitRepoStyled>
);
