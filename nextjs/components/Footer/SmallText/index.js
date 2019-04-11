import React from 'react';
import styled from 'styled-components';

const CopywriteStyled = styled.div `
width: 43%;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
color: white;
font-family: 'Rubik', sans-serif;
font-size: 12px;
`

const Copywrite = ({children}) => {
    return (
        <CopywriteStyled>
            {children}
        </CopywriteStyled>
    );
};

export default Copywrite;