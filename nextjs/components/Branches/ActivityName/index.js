import React from 'react';
import styled from 'styled-components';

const ActivityNameStyled = styled.h3`
width: 100%;
text-align: center;
margin: 0;
padding: 4vh 0;
`
const ActivityName = ({text}) => {
    return (
        <ActivityNameStyled>
            {text}
        </ActivityNameStyled>
    );
};

export default ActivityName;