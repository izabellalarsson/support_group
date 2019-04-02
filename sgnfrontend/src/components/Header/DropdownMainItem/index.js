import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownMainItemStyle = styled.nav`
   display: flex;
   justify-content: center;
   align-items: flex-end;
   flex-direction: column;
   width: 100%;
    /* text-align: right; */
a {
    color: #808080;
    text-decoration: none;
    font-size: 20px;
    margin-right: 5%;
    margin-top: 5%;
}

hr {
    color: #808080;
    width: 90%;
    border: 1px solid #808080;
    margin-right: 0;
}


`
const DropdownMainItem = props => {
    return (
        <DropdownMainItemStyle>
           <a href="#">About</a> 
           <hr/>
           <a href="hr" alt="">Events</a> 
           <hr/>
           <a href="#">Member</a> 
           <hr/>
           <a href="#">Make a change</a> 
           <hr/>
        </DropdownMainItemStyle>
    );
};

DropdownMainItem.propTypes = {
    
};

export default DropdownMainItem;