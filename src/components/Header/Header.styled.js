import styled from 'styled-components'

export const StyledHeader = styled.h1`
-webkit-animation: fadein 2s; 
       -moz-animation: fadein 2s; 
        -ms-animation: fadein 2s; 
         -o-animation: fadein 2s; 
            animation: fadein 2s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
font-size: 96px;
text-align: center;
margin: auto;
background: #19F0FF;
background: -webkit-radial-gradient(circle farthest-corner at center center, #19F0FF 0%, #19F0FF 17%, #FF4AF3 50%, #4824FF 78%, #723CCF 100%);
background: -moz-radial-gradient(circle farthest-corner at center center, #19F0FF 0%, #19F0FF 17%, #FF4AF3 50%, #4824FF 78%, #723CCF 100%);
background: radial-gradient(circle farthest-corner at center center, #19F0FF 0%, #19F0FF 17%, #FF4AF3 50%, #4824FF 78%, #723CCF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`