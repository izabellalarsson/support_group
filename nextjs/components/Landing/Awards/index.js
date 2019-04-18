import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../Title'
import Background from '../Background';


const AwardStyled = styled.div `
    display: flex;
    flex-direction: column;

img {
    width: 86%;
    height: 15%;
    margin: 15px 0px 15px 30px;
}

img:first-child {
    margin-top: 50px;
}

div:nth-child(2){
    height: 60vh;
    width: 100%;
    margin-top: -20px;
    padding: 0;
    background: var(--main-bg);
    margin-bottom: 55px;
    align-self: flex-end;
}

h1 {
}
`
const Awards = ({
    text
}) => {
    return ( <
        AwardStyled >
        <
        Title text = {
            text
        } > < /Title> <
        div >
        <
        img src = "https://dummyimage.com/2000x1720/ffffff/123312" / >
        <
        img src = "https://dummyimage.com/2000x1720/ffffff/123312" / >
        <
        img src = "https://dummyimage.com/2000x1720/ffffff/123312" / >
        <
        img src = "https://dummyimage.com/2000x1720/ffffff/123312" / >
        <
        /div>

        <
        /AwardStyled>
    );
};

Awards.propTypes = {

};

export default Awards;