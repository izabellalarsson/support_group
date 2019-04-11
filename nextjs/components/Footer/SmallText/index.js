import React from 'react';
import styled from 'styled-components';

const CopywriteStyled = styled.div `
width: 40%;
display: flex;
justify-content: center;
align-items: center;
p{
    text-align: center;
    color: white;
    font-family: 'Rubik', sans-serif;
    font-size: 12px;

}
`

const Copywrite = ({children}) => {
    return (
        <CopywriteStyled>
            <p>{children}</p>
        </CopywriteStyled>
    );
};

export default Copywrite;