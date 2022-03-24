import styled from 'styled-components'

export const StyledCard = styled.div`
-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
  width: 150px;
  height: 150px;
  &:hover {
    box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px #fff,
    inset -20px 0 80px #fff,
    inset 20px 0 300px #00FFF3,
    inset -20px 0 300px #00FFF3,
    0 0 50px #f0f,
    -5px 0 30px #f0f,
    -5px 0 30px #fff; 
  }
  transform: ${({ reveal }) => reveal ? 'rotateY(90deg)' : 'rotateY(0deg)'};  
  box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px #f0f,
    inset -20px 0 80px #E400FF,
    inset 20px 0 300px #00FFF3,
    inset -20px 0 300px #00FFF3,
    0 0 50px #f0f,
    -5px 0 30px #f0f,
    -5px 0 30px #fff; 
`