import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar'
import SearchBar from './SearchBar';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
`

class Header extends Component {
    
    state = {
        isClicked: false,
        searchOpen: false
    }
    static async getInitialProps(ctx) {
        this.setState({
            ctx: ctx
        });
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
            <HeaderStyled>

                <Navbar handleClickMenu={this.handleClickMenu} 
                        isClicked={this.state.isClicked} 
                        handleClickSearch={this.handleClickSearch}>
                </Navbar>
                <SearchBar searchOpen={this.state.searchOpen} />

            </HeaderStyled>
        );
    }
}

Header.propTypes = {

};

export default Header;