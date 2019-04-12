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


`
const IconLine = (props) => {
    // console.log(props.menu)
    return (
        <IconLineStyled menu={props.menu}>
            <hr/>
            <div className="icon-container">
                <FooterIcon style={ (props.menu == "menu") ? "var(--sub-bg)" : null}> O </FooterIcon>
                <FooterIcon style={ (props.menu == "menu") ? "var(--sub-bg)" : null}> f </FooterIcon>
                <FooterIcon style={ (props.menu == "menu") ? "var(--sub-bg)" : null}> |> </FooterIcon>
            </div>
        </IconLineStyled>
    );
};

export default IconLine;