import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar'

class Header extends Component {
    state = {
        pages: [],
        isClicked: false
    }

    
    handleClickMenu = () => {
        this.setState ({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        // console.log(this.state.pages)
        return (
            <Navbar handleClickMenu={this.handleClickMenu} isClicked={this.state.isClicked}>
            </Navbar>
        );
    }
}

Header.propTypes = {

};

export default Header;