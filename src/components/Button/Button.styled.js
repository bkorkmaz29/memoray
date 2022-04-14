import styled from "styled-components";
import { devices } from '../../devices';


export const StyledButton = styled.div`
  background-color: #e02d2d;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Oxanium', cursive;
  font-weight: bold;
  padding: 34px 34px;
  margin: auto;
  box-shadow: 0px 0px 50px #db2929, 0px 0px 80px #db2929, 0px 0px 100px #db2929;
  &:hover {
    box-shadow: inset 0 0 50px #db2929, inset 0 0 50px #fff,
      inset 0 -20px 80px #db2929, inset 20px 0 100px #fff,
      inset -20px 0 100px #db2929, 0px 0px 100px #db2929, 0px 0px 200px #db2929,
      0px 0px 300px #db2929;
  }
  &:active {
    position: relative;
    top: 1px;
  }

  @media ${devices.mobileM} {
    max-width: 375px;
    font-size: 20px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    font-size: 22px;
  }

  @media ${devices.laptop} {
    max-width: 1024px;
    padding: 24px 34px;
    font-size: 22px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    padding: 24px 34px;
    font-size: 26px;
  }
`;
