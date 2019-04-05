import React from 'react';
import styled from 'styled-components';

const StyledBranch = styled.div`
    height: 300px;
`

const Branch = () => {
    return (
        <StyledBranch>
            <h1>First Branch Name</h1>
        </StyledBranch>
    );
};

export default Branch;