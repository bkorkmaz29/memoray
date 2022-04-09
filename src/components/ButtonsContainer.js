import styled from "styled-components";
import { devices } from '../devices';

export const ButtonsContainer = styled.div`
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s;
  -ms-animation: fadein 2s;
  -o-animation: fadein 2s;
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  display: flex;
  
  width: 100%;
  height: 50%;
  margin: auto;

  @media ${devices.mobileM} {
    flex-direction: column;
    max-width: 375px;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    max-width: 768px;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    max-width: 1024px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    flex-direction: row;
  }

`;
