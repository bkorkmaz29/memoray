import styled from "styled-components";

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
  flex-direction: row;
  width: 20vw;
  height: 30vh;
  margin: auto;
`;
