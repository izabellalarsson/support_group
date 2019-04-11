import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Dropdown from '../Dropdown'
import DropdownButton from '../DropdownButton'
import Search from '../Search';
import Logo from '../Logo';

const NavbarStyle = styled.nav`
background: var(--headline-font);
width: 100%;
height: 7vh;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top:0;
z-index:999;

.fa-bars {
    z-index:1;
}
i {
    color: white;
}
`

const Navbar = ({isClicked, handleClickMenu}) => {
    return (
        <NavbarStyle>
            <Logo />
            <Search />
            <DropdownButton handleClickMenu={handleClickMenu} isClicked={isClicked}/>
            <Dropdown handleClickMenu={handleClickMenu} onClick={handleClickMenu} isClicked={isClicked}/>
        </NavbarStyle>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;