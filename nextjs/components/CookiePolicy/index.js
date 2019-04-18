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
    button{
        height: 28px;
        background-color: var(--detail-red);
        color: white;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
        letter-spacing: -1.6%;
        border-radius: 5px;
        border: none;
        outline:none;
    }
`

const CookiePolicy = ({isCookiesApproved, handleCookieButtonClick}) => {
    return (
        <CookiePolicyStyled isCookiesApproved={isCookiesApproved}>
            Do you approve of cookies?
            <button onClick={handleCookieButtonClick}> I Understand</button>
        </CookiePolicyStyled>
    );
};

export default CookiePolicy;