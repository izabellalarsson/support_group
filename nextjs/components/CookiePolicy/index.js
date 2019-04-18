import React from 'react';
import styled from 'styled-components'
import Button from '../Button';

const CookiePolicyStyled = styled.div`
    width: 100vw;
    height: 10vh;
    position: sticky;
    bottom: 0vh;
    background: var(--sub-bg);
    justify-content: space-around;
    align-items: center;
    display: ${props => props.isCookiesApproved ? 'none' : 'flex'};
`

const CookiePolicy = ({isCookiesApproved, cookieButtonClick}) => {
    return (
        <CookiePolicyStyled isCookiesApproved={isCookiesApproved}>
            Do you approve of cookies?
            <Button onClick={cookieButtonClick} text="Approve!"/>
        </CookiePolicyStyled>
    );
};

export default CookiePolicy;