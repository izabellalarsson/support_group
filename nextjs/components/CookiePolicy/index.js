import React from 'react';
import styled from 'styled-components'
import Text from '../Text';

const CookiePolicyStyled = styled.div`
    width: 100vw;
    position: fixed;
    z-index: 999;
    bottom: 0vh;
    background: var(--sub-bg);
    flex-flow: column;
    display: ${props => props.isCookiesApproved ? 'none' : 'flex'};
    h3 {
        color: white;
        margin-left: 30px;
        margin-bottom: 0;
    }
    button{
        margin-right: 30px;
        margin-bottom: 30px;
        width: 150px;
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
    p{
        padding-bottom: 0;
    }
    div{
        display: flex;
        justify-content: flex-end;
    }
`

const CookiePolicy = ({isCookiesApproved, handleCookieButtonClick}) => {
    return (
        <CookiePolicyStyled isCookiesApproved={isCookiesApproved}>
            <h3>Cookies</h3>
            <Text text="We use cookies to give you a better experience while using out site" />
            {/* <Text text="Vi använder cookies för att ge dig en bättre upplevelse på våran websida.
            Om cookies på supportgroup.se." /> */}
            <div>
                <button onClick={handleCookieButtonClick}>I understand</button>
            </div>
        </CookiePolicyStyled>
    );
};

export default CookiePolicy;