import styled from "styled-components";
import { devices } from "../../devices";

export const StyledRulesPage = styled.div`
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
  background-color: black;

  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1px solid aqua;
  

  ul {
    margin: auto;
    color: white;
    @media ${devices.mobileM} {
      max-width: 375px;
      font-size: 22px;
    }

    @media ${devices.tablet} {
      max-width: 768px;
      font-size: 24px;
    }

    @media ${devices.laptop} {
      max-width: 1024px;

      font-size: 38px;
    }

    @media ${devices.desktop} {
      max-width: 2560px;

      font-size: 42px;
    }
  }
`;
