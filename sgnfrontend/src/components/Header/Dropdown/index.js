import React from 'react';
import PropTypes from 'prop-types';
import DropdownMainItem from '../DropdownMainItem'
import styled from 'styled-components'

const DropdownStyle = styled.div`

display: ${props => props.isClicked ? "none" : "flex; position: absolute; "};
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
background: #EFEFEF;

`


const Dropdown = ({isClicked}) => {
    return (
        <DropdownStyle isClicked={isClicked}>
            <DropdownMainItem isClicked={isClicked}/>
        </DropdownStyle>
            
        
    );
};

Dropdown.propTypes = {
    
};

export default Dropdown;