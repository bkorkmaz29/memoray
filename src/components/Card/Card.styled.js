import styled from "styled-components";

export const StyledCard = styled.div.attrs((props) => ({
  className: props.className,
}))`
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

  width: 100px;
  height: 100px;

  &:hover {
    box-shadow: inset 0 0 50px #fff, inset 0 0 50px #fff,
      inset 0 -20px 80px #01fee5, inset 20px 0 100px #fff,
      inset -20px 0 100px #01fee5, 0 0 100px #f0f, 0 0 300px #f0f,
      0 0 500px #f0f;
  }

  &:active {
    box-shadow: inset 0 0 10px #f0f, inset 0 0 20px #f0f,
      inset 0 90px 100px #000, inset 20px 0 100px #f0f, inset -20px 0 100px #f0f,
      0 0 30px #f0f, 0 0 30px #f0f, 0 0 30px #f0f;
  }

  box-shadow: 0 0 10px #f0f, 0px 0 20px #f0f, 0px 0 30px #f0f;
`;
