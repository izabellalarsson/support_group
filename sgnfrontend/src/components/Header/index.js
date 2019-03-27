import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    state = {
        pages: []
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
            <div>
               {this.state.pages.map(item => (
                   <p>{item.title.rendered}</p>
               ))}
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;