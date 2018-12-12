import styled from '@emotion/styled';
import { BREAKPOINT } from '../global/Constants';

export const HeaderStyled = styled.header`
  width: 100vw;

  height: 60vh;

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-text {
    position: absolute;
    top: 50vh;
    left: 2.5vw;
    transform: translate(0, -100%);

    display: flex;
    flex-direction: column;

    color: white;
  }

  .title {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .description {
    font-size: 24px;
    max-width: 60vw;
  }

  @media all and (max-width: ${BREAKPOINT}px) {
    margin-top: 48px;
    height: 30vh;

    .hero-text {
      top: 30vh;
    }

    .title {
      display: none;
    }
    .description {
      font-size: 14px;
    }
  }
`;
