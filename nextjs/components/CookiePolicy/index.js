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
            <Text text="We and our partners use cookies on this site to improve our service, 
            perform analytics, personalize advertising, measure advertising performance, 
            and remember website preferences. By using the site, 
            you consent to these cookies.For more information on cookies 
            including how to manage your consent visit our cookie policy." />
            <div>
                <button onClick={handleCookieButtonClick}>Continue</button>
            </div>
        </CookiePolicyStyled>
    );
};

export default CookiePolicy;