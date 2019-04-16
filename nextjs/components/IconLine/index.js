import React from 'react';
import styled from 'styled-components';
import FooterIcon from '../Footer/FooterIcon';

const IconLineStyled = styled.div`
    width: 100%;
    margin-top: ${props => props.menu ? "50px" : "24px"};
    margin-bottom: 60px;

    .icon-container{
        position: absolute;
        display: flex;
        transform: translateY(-32px);
        width: 100%;
        justify-content: center;
    }
    hr{
        border-top: 1px solid ${props => props.menu ? "var(--sub-bg)" : "white"};

    }

    section {
        transition: height 0.5s ease;
        height: ${props => props.isClicked ? "20vh" : "0"};
        background: white;
        margin-top: -2.5vh;
    }

    section * {
        opacity: ${props => props.isClicked ? "1" : "0"};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 20vh;
    }

    section h2 {
        margin: 3vh 3vh 3vh 0;
        font-family: 'Rubik', sans-serif;
        text-decoration: none;
        line-height: 90%;
        font-weight: bold;
        color: var(--headline-font);
        font-size: 26px;
    }

`
const IconLine = ({isClicked, handleClickSettings, menu}) => {
    return (
        <IconLineStyled menu={menu} isClicked={isClicked}>
            <hr/>
            <div className="icon-container">
                <FooterIcon style={ (menu == "menu") ? "var(--sub-bg)" : null} handleClickSettings={handleClickSettings} isClicked={isClicked}><i className="fas fa-cog"/></FooterIcon>
                <FooterIcon style={ (menu == "menu") ? "var(--sub-bg)" : null}><i className="fab fa-facebook-f"/></FooterIcon>
                <FooterIcon style={ (menu == "menu") ? "var(--sub-bg)" : null}><i className="fab fa-youtube"/></FooterIcon>
            </div>
            <section>
                <h2>Settings</h2>
            </section>
        </IconLineStyled>
    );
};

export default IconLine;