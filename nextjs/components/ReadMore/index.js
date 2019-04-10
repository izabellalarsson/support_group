import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

const ReadMoreStyle = styled.div`
align-self: flex-end;
width: 30%;

a {
    animation-name: move;
    animation-duration: 3s;
    animation-iteration-count: infinite;  
    text-decoration: none;
    color: #EE7171;
}

a:hover {
    animation-iteration-count: 0; 
    font-weight: bold; 


    +hr {
        animation-name: stripe;
        animation-duration: 0.5s;
        animation-iteration-count: 1;  
        border-top: 3px solid #EE7171;
        display: block;
        width: 80%;
        margin: 0;
        margin-bottom: 10px;
    }
}

hr {
    border: 4px;
}


@keyframes stripe {
  0% {
    width: 0;
  }

  100% {
    width: 80%;
  }
}

@keyframes move {
  0% {
    font-weight: 200;
  }

  50% {
    font-weight: 200;
  }

  75% {
      font-weight: 600;
  }

  100% {
    font-weight: 200;
  }

}
`


const ReadMore = ({props}) => {
    return (
        <ReadMoreStyle>
            <Link href=""><a href="">Read more</a></Link>
            <hr/>
        </ReadMoreStyle>
    );
};

ReadMore.propTypes = {
    
};

export default ReadMore;