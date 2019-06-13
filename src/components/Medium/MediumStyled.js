import styled from 'styled-components';

export const MediumStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 888px) {
    justify-content: center;
  }

  margin: 0;
  padding: 0;
  max-width: 90%;
  width: 800px;

  list-style: none;
`;

export const ItemStyled = styled.li`
  flex-basis: calc(50% - 40px);
  min-width: 360px;
  @media (max-width: 420px) {
    flex-basis: 100%;
    min-width: auto;
  }

  margin: 20px 20px 60px;
  padding: 0;
`;

export const PostTitleStyled = styled.h3`
  min-height: 48px;
  margin: 0 0 18px;

  font-weight: bold;
  font-size: 16px;
  color: #0366d6;
`;

export const LinkStyled = styled.a`
  text-decoration: none;
  color: black;
`;

export const ThumbnailStyled = styled.img`
  width: 100%;
`;

export const DescriptionStyled = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
`;
