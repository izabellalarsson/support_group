import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Dropdown from '../Dropdown'

const NavbarStyle = styled.nav`
background: #C4C4C4;
width: 100%;
height: 7vh;
display: flex;
justify-content: space-around;
align-items: center;
position: sticky;
top:0;

.fa-bars {
    z-index:1;
}
`

const Navbar = ({isClicked, handleClickMenu}) => {
    return (
        <NavbarStyle>
            <i className="fab fa-wordpress"></i>
            <i className="fas fa-search"></i>
            <i className="fas fa-bars" onClick={handleClickMenu}></i>
            <Dropdown handleClickMenu={handleClickMenu} onClick={handleClickMenu} isClicked={isClicked}/>
        </NavbarStyle>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;