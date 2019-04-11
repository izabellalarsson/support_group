import React from 'react';
import styled from 'styled-components';
import FooterIcon from '../FooterIcon';

const IconLineStyled = styled.div`
    width: 100%;
    .icon-container{
        position: absolute;
        display: flex;
        transform: translateY(-32px);
        width: 100%;
        justify-content: center;
    }
    hr{
        border-top: 2px solid white;
    }
`
const IconLine = () => {
    return (
        <IconLineStyled>
            <hr/>
            <div className="icon-container">
                <FooterIcon> O </FooterIcon>
                <FooterIcon> f </FooterIcon>
                <FooterIcon> |> </FooterIcon>
            </div>
        </IconLineStyled>
    );
};

export default IconLine;