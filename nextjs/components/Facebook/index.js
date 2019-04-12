import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Subheading from '../Subheading'

const FacebookStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h2 {
    align-self: flex-start;
    z-index: 998;
}



> div {
    background: var(--main-bg);
    display: flex;
    justify-content: center;
    padding: 15px 0 0px;
    flex-direction: column;
    width: 80%;
    margin-top: -45px;
}

div:nth-child(2){
    z-index: 998;
    width: 30%;
    height: 70px;
    background: var(--facebook-bg);
    align-self: flex-end;
}

> h2 {
    margin-bottom: -5px;
}

iframe {
    padding: 30px 0;
    align-self: center;
    width: 80%;
    height: 50vh;
    border: none;
    overflow: hidden;
}

`



const Facebook = ({props}) => {
    return (
        <FacebookStyle>
            <Subheading text='Our Facebook activity'/>
            <div></div>
            <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSupportRestadGard%2F&tabs=timeline&width=250&height=380&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=321304838567791" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>

        </FacebookStyle>
    );
};

Facebook.propTypes = {
    
};

export default Facebook;