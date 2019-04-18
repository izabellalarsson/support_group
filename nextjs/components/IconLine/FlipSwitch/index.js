import React from 'react';
import styled from 'styled-components';

const StyledFlipSwitch = styled.div`
    width: 53px;
    height: 18px;
    display:flex;
    transition: .3s linear;
    ${props => props.switchOn 
    ?`  background-color: var(--sub-bg);
        justify-content: flex-end` 
    :`  background-color: var(--detail-red);
        justify-content: flex-start` 
    };
    border-radius: 4px;
    padding: 3px;
    div{
        transition: .3s linear;
        height: 100%;
        width: 20px;
        background-color: white;
        border-radius: 2px;
    }
`;

const FlipSwitch = ({switchOn, onClick}) => {
    return (
        <StyledFlipSwitch onClick={onClick} switchOn={switchOn}>
            <div></div>
        </StyledFlipSwitch>
    );
};

export default FlipSwitch;