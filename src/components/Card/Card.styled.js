import styled from 'styled-components'

export const StyledCard = styled.div`
-webkit-animation: fadein 2s; 
       -moz-animation: fadein 2s; 
        -ms-animation: fadein 2s; 
         -o-animation: fadein 2s; 
            animation: fadein 2s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
  width: 100px;
  height: 100px;
  &:hover {
    box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px #fff,
    inset -20px 0 80px #fff,
    inset 20px 0 300px #00FFF3,
    inset -20px 0 300px #00FFF3,
    0 0 50px #f0f,
    -5px 0 300px #f0f,
    -5px 0 300px #fff; 
  }
  transform: ${({ reveal }) => reveal ? 'rotateY(0deg)' : 'rotateY(180deg)'};  
  box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px #f0f,
    inset -20px 0 80px #00FFF3,
    inset 20px 0 300px #00FFF3,
    inset -20px 0 300px #00FFF3,
    0 0 50px #f0f,
    -5px 0 30px #f0f,
    -5px 0 30px #fff; 
`