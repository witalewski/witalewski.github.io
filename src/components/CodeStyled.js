import styled from '@emotion/styled';

export const CodeStyled = styled.section`
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
