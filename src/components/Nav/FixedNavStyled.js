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

  .title {
    margin: 16px;
  }

  .list {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    list-style: none;
    margin: 0 16px;
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
    margin-left: 24px;
  }
  @media all and (max-width: ${BREAKPOINT}px) {
    height: 48px;

    .title,
    .link {
      font-size: 14px;
      padding: 0;
      margin: 8px;
    }
  }
`;
