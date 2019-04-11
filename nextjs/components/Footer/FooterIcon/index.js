import React from 'react';
import styled from 'styled-components';
const FooterIconStyled = styled.div`
width: 42px;
height: 42px;
border: 3px solid white;
border-radius: 50%;
margin: 0px 15px;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: var(--headline-font);
`

const FooterIcon = ({children}) => {
    return (
        <FooterIconStyled>
            {children}
        </FooterIconStyled>
    );
};

export default FooterIcon;