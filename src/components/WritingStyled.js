import styled from '@emotion/styled';

export const WritingStyled = styled.section`
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
