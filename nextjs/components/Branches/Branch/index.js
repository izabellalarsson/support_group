import React from 'react';
import styled from 'styled-components';

const StyledBranch = styled.div`
    height: 300px;
`

const Branch = ({name, description}) => {
    return (
        <StyledBranch>
            <h1>{name}</h1>
            <p dangerouslySetInnerHTML={{__html: description}} />
        </StyledBranch>
    );
};

export default Branch;