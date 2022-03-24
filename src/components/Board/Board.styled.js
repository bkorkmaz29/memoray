import styled from 'styled-components'

export const StyledBoard = styled.div`
display: grid;
width: 100%;
max-width: 100%;
height: 100%;
max-height: 100%;
border-style: solid;
column-gap: 50px;
row-gap: 50px;
grid-template-columns: auto auto auto auto;
justify-content: space-evenly;
`