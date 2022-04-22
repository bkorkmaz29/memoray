import styled from "styled-components";
import { devices } from "../../devices";

export const StyledPanel = styled.div`
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
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;

  button {
    background: linear-gradient(to bottom, #4824ff 5%, #19f0ff 100%);
    background-color: #f710c2;
    border-radius: 9px;
    border: 1px solid red;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 0.75rem;
    padding: 16px 31px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2f6627;
    width: 100px;
    height: 50px;
    margin: auto;
  }

  .counter-wrapper {
    display: flex;
    flex-direction: row;
    width: 30%;
    justify-content: center;
    align-items: center;
  }

  @media ${devices.mobileM} {
    max-width: 375px;
    font-stretch: extra-expanded;
  }

  @media ${devices.tablet} {
    max-width: 768px;
  }

  @media ${devices.laptop} {
    max-width: 1024px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
  }
`;
