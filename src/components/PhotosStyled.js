import styled from '@emotion/styled';

export const PhotosStyled = styled.section`
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

  .placeholder {
    height: 300px;
  }

  .placeholder--inner {
    width: 100%;
    height: 200px;
    margin-top: 50px;
    background: #f0f0f0;
  }

  .read-more {
    width: 100%;
    text-align: center;
  }
`;
