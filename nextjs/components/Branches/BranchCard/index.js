import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Title from '../../Title';
import Subheading from '../../Subheading'
import ReadMore from '../../ReadMore';
import Text from '../../Text'

const BranchCardStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;

    a {
        text-decoration: none;
    }

    i {
        color: #EE7171;
        margin-right: 10px;
    }

    .where {
        margin-left: 30px;
        display: flex;
        align-items: center;
    }
`

const Branch = ({name, shortDescription, link, id, city}) => {
    return (
        <BranchCardStyle>
            <Link id={id} href={`/branches/${link}`} ><a href={`/branches/${link}`}><Title text={name}/></a></Link>
            <div className="where">
                <i class="fas fa-map-marker-alt"></i>
                <Subheading text={city}/> 
            </div>

            <Text dangerouslySetInnerHTML={{__html: shortDescription}} text={shortDescription}/>
            
            <ReadMore/>
        </BranchCardStyle>
    );
};

export default Branch;
