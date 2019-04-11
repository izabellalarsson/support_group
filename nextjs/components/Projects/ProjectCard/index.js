import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Link from 'next/link'
import Title from '../../Title'
import Text from '../../Text'
import DateText from '../DateText'
import ReadMore from '../../ReadMore'
import BlueLine from '../../BlueLine'

const ProjectCardStyle = styled.div`
background-image: linear-gradient(#F3F5FF, white);
width: 100%;
margin: 0;
display: flex;
flex-direction: column;

h1 {
    margin-top: 0;
}

a {
    text-decoration: none;
    z-index: 998;
}

img {
    margin: 30px 0 0 30px;
    object-fit: cover;
    width: 84%;
}
`

const ProjectCard = ({title, description, date, imageUrl, id, link, type}) => {
    return (
        <ProjectCardStyle>
            <Link id={id} href={`/projects/${link}`}><a href={`/projects/${link}`}><Title text={title}/></a></Link>
            <img src={imageUrl}/>
            <DateText text={date}/>
            <Text text={description}/>
            <ReadMore id={id} link={link} type={type}/>
            <BlueLine/>
        </ProjectCardStyle>
    );
};

ProjectCard.propTypes = {
    
};

export default ProjectCard;