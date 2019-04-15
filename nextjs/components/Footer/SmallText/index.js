import React from 'react';
import styled from 'styled-components';

const CopywriteStyled = styled.div `
width: 43%;
text-align: center;
color: white;
font-family: 'Rubik', sans-serif;
font-size: 12px;
line-height: 2.5vh;
margin-bottom: 3vh;
a{
    color: var(--detail-red);
    font-size: 12px;
    text-decoration: none;
}
`

const Copywrite = ({children}) => {
    return (
        <CopywriteStyled>
            {children}
        </CopywriteStyled>
    );
};

export default Copywrite;