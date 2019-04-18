import React from 'react';
import styled from 'styled-components';

const StyledFlipSwitch = styled.div`
    width: 53px;
    height: 18px;
    display:flex;
    transition: .5s linear;
    ${props => props.switchOn 
    ?`  background-color: var(--sub-bg);
        justify-content: flex-end;`
    :`  background-color: var(--detail-red);
        justify-content: flex-start;`
    }
    border-radius: 4px;
    padding: 3px;
    div{
        width: 20px;
        transition: .5s linear;
        height: 100%;
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