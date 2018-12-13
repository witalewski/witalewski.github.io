import styled from '@emotion/styled';

export const GitRepoStyled = styled.div`
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
    padding-top: 1px;
    width: 12px;
  }

  .repo-language {
    margin-right: 12px;
  }
`;
