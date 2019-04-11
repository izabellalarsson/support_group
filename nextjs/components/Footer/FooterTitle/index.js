import React from 'react';
import styled from 'styled-components';
const FooterTitleStyled = styled.div`
color: white;
font-size: 40px;
font-family: 'Rubik', sans-serif;
`

const FooterTitle = ({children}) => {
    return (
        <FooterTitleStyled>
            {children}
        </FooterTitleStyled>
    );
};
export default FooterTitle;