import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar'

class Header extends Component {
    state = {
        isClicked: false,
        searchOpen: false
    }

    componentDidMount () {
        // this.handleClickMenu()
    }
    
    handleClickMenu = () => {
        this.setState ({
            isClicked: !this.state.isClicked
        })
    }
    handleClickSearch = () => {
        this.setState ({
            searchOpen: !this.state.searchOpen
        })
    }


    render() {
        return (
            <Navbar handleClickMenu={this.handleClickMenu} 
                    isClicked={this.state.isClicked} 
                    searchOpen={this.state.searchOpen}
                    handleClickSearch={this.handleClickSearch}>
            </Navbar>
        );
    }
}

Header.propTypes = {

};

export default Header;