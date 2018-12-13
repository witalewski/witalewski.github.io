import styled from '@emotion/styled';
import { BREAKPOINT } from '../../global/Constants';

export const FixedNavStyled = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0px;
  width: 100vw;
  height: 60px;
  background: white;

  border-bottom: 1px solid #d1d5da;

  transition: top 0.4s;

  .title {
    margin-right: 24px;
  }

  &.hidden {
    top: -60px;
  }

  .list {
    display: flex;
    flex-grow: 1;
    list-style: none;
    font-size: 20px;
    align-items: center;
    margin: 0 8px;
    padding: 0;
  }

  .list-item {
    margin: 8px;
  }

  .link,
  .link:active,
  .link:visited {
    color: #0366d6;
    font-weight: bold;
  }

  .fixed-header-title {
    margin: 0;
    font-size: 20px;
    margin-right: 24px;
  }

  @media all and (max-width: ${BREAKPOINT}px) {
    height: 32px;
    align-items: baseline;

    padding: 0 4px;

    .list {
      margin: 0;
      align-items: baseline;
    }

    .list-item {
      margin: 0;
    }

    .title,
    .link {
      font-size: 14px;
      padding: 0;
      margin: 8px;
    }
  }
`;
