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

    componentDidMount () {
        this.fetchPages()
    }

    fetchPages = () => {
        const api = 'http://wordplate.test/wp-json/wp/v2/pages'

        fetch(api)
        .then(res => res.json())
        .then(data => 
            this.setState({
                pages: data,
            })
        )
    };

    render() {
        console.log(this.state.pages)
        return (
            <Navbar handleClickMenu={this.handleClickMenu} isClicked={this.state.isClicked}>
            </Navbar>
        );
    }
}

Header.propTypes = {

};

export default Header;