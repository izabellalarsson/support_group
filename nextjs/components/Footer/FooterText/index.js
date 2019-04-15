import React from 'react';
import styled from 'styled-components';

const FooterTextStyled = styled.div`
    text-align: center;
    font-size: 16px;
    color: white;
    width: 60%;
    margin-bottom: 3vh;
    line-height: 22px;
`

const FooterText = ({children}) => {
    return (
        <FooterTextStyled>
            {children}
        </FooterTextStyled>
    );
};

export default FooterText;