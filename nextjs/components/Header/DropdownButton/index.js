import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
const DropdownButtonStyle = styled.div`

.bar1, .bar2 {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
}

.bar1 {
    ${props => !props.isClicked ? "translateX(0)" : "transform: rotate(-45deg) translate(-6px, 6px);"}
}

.bar2 {
    ${props => !props.isClicked ? "translateX(0)" : "transform: rotate(45deg) translate(-2px, -2px);"}  
}
`

const DropdownButton = ({handleClickMenu, isClicked}) => {
    return (
        <DropdownButtonStyle onClick={handleClickMenu} isClicked={isClicked}>
            <div className="bar1"></div>
            <div className="bar2"></div>
        </DropdownButtonStyle>
    );
};

DropdownButton.propTypes = {
    
};

export default DropdownButton;