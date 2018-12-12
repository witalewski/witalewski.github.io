import styled from '@emotion/styled';
import { BREAKPOINT } from '../global/Constants';

export const ImageBreakStyled = styled.div`
  .break-image {
    width: 100%;
    height: 200px;

    margin-top: 96px;
    margin-bottom: 96px;

    object-fit: cover;
  }
  @media all and (max-width: ${BREAKPOINT}px) {
    .break-image {
      width: 100%;
      height: 50px;

      margin-top: 24px;
      margin-bottom: 24px;

      object-fit: cover;
    }
  }
`;
