import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Title from '../Title';
import Subheading from '../Subheading'
import Text from '../Text';
import Facebook from '../Facebook'
import Map from './Map'
import Partners from '../Partners';

const AboutStyle = styled.div`


h2 {
    margin-left: 30px;
}

img {
    width: 100%;
}
`

class About extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <AboutStyle>
                <div>
                    < img src = "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" / >
                </div>
                <Title text="Whats is SGN?"/>
                <Subheading text="A better future"/>
                <Text text="Support Group Network (SGN), is a non-profit organization 
                initiated by refugees and collaborates with local societies to improve 
                integration of asylum seekers, refugees and immigrants, for whom SGN provides 
                psychosocial support through creating need-based activities and projects 
                aiming to enhance their future in Europe or home countries if they go back." />

                <Facebook/>

                <Title text="Our partners"/>
                    <Partners/>
                <Title text="Locations"/>
                <Map/>
            </AboutStyle>
        );
    }
}

About.propTypes = {

};

export default About;