import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar'

class Header extends Component {
    state = {
        isClicked: false
    }

    
    handleClickMenu = () => {
        this.setState ({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        return (
            <Navbar handleClickMenu={this.handleClickMenu} isClicked={this.state.isClicked}>
            </Navbar>
        );
    }
}

Header.propTypes = {

};

export default Header;