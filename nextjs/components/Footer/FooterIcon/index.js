import React from 'react';
import styled from 'styled-components';
const FooterIconStyled = styled.div`
width: 42px;
height: 42px;
border: 2px solid ${props => props.color || "white"};
/* border: ${props => props.border || "2px solid white"}; */
border-radius: 50%;
margin: 0px 15px;
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.color || "white"};
background-color: ${props => props.color ? "var(--main-bg)" : "var(--headline-font)"};
`

const FooterIcon = ({children, style}) => {
    console.log(style)
    return (
        <FooterIconStyled color={style}>
            {children}
        </FooterIconStyled>
    );
};

export default FooterIcon;