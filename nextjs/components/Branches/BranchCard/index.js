import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Title from '../../Title';

const BranchCardStyle = styled.div`


    a {
        text-decoration: none;
    }
`

const Branch = ({name, description, link, id}) => {
    return (
        <BranchCardStyle>
            <Link id={id} href={`/branches/${link}`} ><a href={`/branches/${link}`}><Title text={name}/></a></Link>
            <i class="fas fa-map-marker-alt"></i>
            <p dangerouslySetInnerHTML={{__html: description}} />
        </BranchCardStyle>
    );
};

export default Branch;
