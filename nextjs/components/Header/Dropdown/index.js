import React from 'react';
import PropTypes from 'prop-types';
import DropdownMainItem from '../DropdownMainItem'
import styled from 'styled-components'
import DropdownSecondaryItem from '../DropdownSecondaryItem';

const DropdownStyle = styled.div`
position:fixed;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 93vh;
transition: transform 0.5s ease;
transform: ${props => !props.isClicked ? "translateX(100vw)" : "translateX(0)"};
top: 7vh;
background: #F1E7FF;

/* &:hover {
    left: 100vw;
} */



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

const Dropdown = ({isClicked, handleClickMenu}) => {
    return (
        <DropdownStyle isClicked={isClicked}>
            <nav className="Dropdown-Main-Item">
                <DropdownMainItem text="About" link="/about" handleClickMenu={handleClickMenu}/>
                <hr/>
                <DropdownMainItem text="Events" link="hje"/>
                <hr/>
                <DropdownMainItem text="Member" link="hje"/>
                <hr/>
                <DropdownMainItem text="Make a change" link="hje"/>
                <hr/>
                <DropdownMainItem text="Branches" link="/branches" handleClickMenu={handleClickMenu} />
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