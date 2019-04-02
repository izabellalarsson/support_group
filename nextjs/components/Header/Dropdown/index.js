import React from 'react';
import PropTypes from 'prop-types';
import DropdownMainItem from '../DropdownMainItem'
import styled from 'styled-components'
import DropdownSecondaryItem from '../DropdownSecondaryItem';

const DropdownStyle = styled.div`

display: ${props => props.isClicked ? "none" : "flex; position: absolute; "};
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
background: #EFEFEF;

.Dropdown-Main-Item {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
}

.Dropdown-Main-Item hr {
    color: #808080;
    width: 90%;
    border: 1px solid #808080;
    margin-right: 0;
}
.Dropdown-Secondary-Item {
    margin-top: 20%;
}


`


const Dropdown = ({isClicked}) => {
    return (
        <DropdownStyle isClicked={isClicked}>
            <nav className="Dropdown-Main-Item">
                <DropdownMainItem isClicked={isClicked} text="About" link="about"/>
                <hr/>
                <DropdownMainItem isClicked={isClicked} text="Events" link="hje"/>
                <hr/>
                <DropdownMainItem isClicked={isClicked} text="Member" link="hje"/>
                <hr/>
                <DropdownMainItem isClicked={isClicked} text="Make a change" link="hje"/>
                <hr/>
                <DropdownMainItem isClicked={isClicked} text="Branches" link="branches"/>
                <hr/>
            </nav>
            <nav className="Dropdown-Secondary-Item">
                <DropdownSecondaryItem text="Language" link="hje"/>
                <DropdownSecondaryItem text="Accessability" link="hje"/>
                <DropdownSecondaryItem text="Help" link="hje"/>
            </nav>
        </DropdownStyle>
            
        
    );
};

Dropdown.propTypes = {
    
};

export default Dropdown;