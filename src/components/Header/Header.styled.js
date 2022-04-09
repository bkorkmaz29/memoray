import styled from "styled-components";
import { devices } from '../../devices';


export const StyledHeader = styled.h1`
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
  font-size: 156px;
  font-family: 'Monoton', cursive;
  text-align: center;
  margin: auto;
  background: #19f0ff;
  background: -webkit-radial-gradient(
    circle farthest-corner at center center,
    #19f0ff 0%,
    #19f0ff 17%,
    #ff4af3 50%,
    #4824ff 78%,
    #723ccf 100%
  );
  background: -moz-radial-gradient(
    circle farthest-corner at center center,
    #19f0ff 0%,
    #19f0ff 17%,
    #ff4af3 50%,
    #4824ff 78%,
    #723ccf 100%
  );
  background: radial-gradient(
    circle farthest-corner at center center,
    #19f0ff 0%,
    #19f0ff 17%,
    #ff4af3 50%,
    #4824ff 78%,
    #723ccf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


  @media ${devices.mobileM} {
    max-width: 375px;
    font-size: 58px;
    font-stretch: extra-expanded;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    font-size: 96px;
  }



  @media ${devices.laptop} {
    max-width: 1024px;
    font-size: 156px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    font-size: 156px;
  }
`;
