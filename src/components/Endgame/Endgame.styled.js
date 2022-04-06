import styled from "styled-components";

export const StyledEndgame = styled.div`
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
  font-family: Verdana;

  h1 {
    margin-top: 100px;
    margin-bottom: 200px;
    color: white;
  }
`;
