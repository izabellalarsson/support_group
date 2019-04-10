import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.div`
    margin-left: 30px;
`
const Logo = () => {
    return (
        <LogoStyled>
            <i className="fab fa-wordpress"></i>
        </LogoStyled>
    );
};

export default Logo;