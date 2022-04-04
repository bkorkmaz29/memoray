import styled from 'styled-components'

export const StyledStartButton = styled.button`

	
	
	background-color:#e02d2d;
	border-radius:9px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Verdana;
	font-size:20px;
	font-weight:bold;
	padding:14px 34px;
    margin-bottom: 250px;
	box-shadow: 
		0px 0px 50px #db2929,
		0px 0px 80px #db2929,
		0px 0px 100px #db2929;
    &:hover {
		box-shadow: 
		inset 0 0 50px #db2929,
    	inset 0 0 50px #fff,
   		inset 0 -20px 80px #db2929,
    	inset 20px 0 100px #fff,
    	inset -20px 0 100px #db2929,
		0px 0px 100px #db2929,
		0px 0px 200px #db2929,
		0px 0px 300px #db2929;
	
  }
    &:active {
    position:relative;
	top:1px;
  }

`