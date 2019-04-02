import React from 'react';
import PropTypes from 'prop-types';
import DropdownMainItem from '../DropdownMainItem'
import styled from 'styled-components'

const DropdownStyle = styled.div`

display: ${props => props.isClicked ? "none" : "block; position: absolute; "};
top: 50px;
width: 100%;
height: 50px;
background: #EFEFEF;

`


const Dropdown = ({isClicked}) => {
    return (
        <DropdownStyle isClicked={isClicked}>
            <DropdownMainItem/>
        </DropdownStyle>
            
        
    );
};

Dropdown.propTypes = {
    
};

export default Dropdown;