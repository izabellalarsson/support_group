import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const StyledBranch = styled.div`
    height: 300px;
`

const Branch = ({name, description, link}) => {
    return (
        <StyledBranch>
            <Link href={`/branches/${link}`}><a href={`/branches/${link}`}>{name}</a></Link>
            <h1>{name}</h1>
            <p dangerouslySetInnerHTML={{__html: description}} />
        </StyledBranch>
    );
};

export default Branch;