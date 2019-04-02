import React from 'react';
import PropTypes from 'prop-types';

const DropdownMainItem = props => {
    return (
        <div>
           <a href="#">About</a> 
           <a href="#">Event</a> 
           <a href="#">Member</a> 
           <a href="#">Make a change</a> 
        </div>
    );
};

DropdownMainItem.propTypes = {
    
};

export default DropdownMainItem;