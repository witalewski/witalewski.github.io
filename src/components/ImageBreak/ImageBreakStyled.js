import styled from '@emotion/styled';
import { BREAKPOINT } from '../../global/Constants';

export const ImageBreakStyled = styled.div`
  width: 100%;
  height: 200px;

  margin-top: 72px;
  margin-bottom: 72px;

  background: #f0f0f0;

  .break-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media all and (max-width: ${BREAKPOINT}px) {
    height: 50px;

    margin-top: 36px;
    margin-bottom: 36px;
  }
`;
